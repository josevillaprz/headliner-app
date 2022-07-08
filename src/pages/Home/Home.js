import React, { useState } from "react";

// COMPONENTS
import SearchBar from "../../components/SearchBar/SearchBar";
import EventList from "../../components/EventList/EventList";
import Loader from "../../components/Loader/Loader";
import Hero from "../../components/Hero/Hero";

// STYLING
import styles from "./Home.module.css";

// IMAGES
import heroImage from "../../images/hero.webp";

const HomePage = (props) => {
  const [searchText, setSearchText] = useState("");
  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(false);

  // FUNCTIONS
  const changeHandler = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText.trim());
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // empty event state
    setEventList([]);
    // Make API request if search bar is not blank
    if (searchText.trim() !== "") {
      setLoading(true);
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=${searchText}&apikey=bKX5jS9T2TlroD8wMcQ0Gth24As1CZF6`
      );
      const data = await response.json();
      if (data.page.totalPages !== 0) {
        setEventList(data._embedded.events);
      }
    }
    setLoading(false);
  };

  return (
    <main className={styles.container}>
      <Hero
        image={heroImage}
        title="Find your next big music event."
        subhead="Discover amazing events near you."
      />
      <SearchBar submitHandler={submitHandler} changeHandler={changeHandler} />
      {loading && <Loader />}
      {eventList.length > 0 && <EventList events={eventList} />}
    </main>
  );
};

export default HomePage;
