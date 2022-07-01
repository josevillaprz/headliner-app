import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import EventList from "../../components/EventList/EventList";
import Loader from "../../components/Loader/Loader";
import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.css";

const HomePage = (props) => {
  //   // STATE
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);
  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(false);

  //   // FUNCTIONS
  const changeHandler = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // clear state to remove component
    setEventList([]);
    // Make API request if not blank
    if (searchText.trim() !== "") {
      setLoading(true);
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=${searchText}&apikey=bKX5jS9T2TlroD8wMcQ0Gth24As1CZF6`
      );
      const data = await response.json();
      if (data.page.totalPages === 0) {
        setError(true);
      } else {
        setEventList(data._embedded.events);
        console.log(data._embedded.events);
      }
    }
    setLoading(false);
  };

  // JSX
  return (
    <main className={styles.container}>
      <Hero />
      <SearchBar submitHandler={submitHandler} changeHandler={changeHandler} />
      {loading && <Loader />}
      {eventList.length > 0 && <EventList events={eventList} />}
    </main>
  );
};

export default HomePage;
