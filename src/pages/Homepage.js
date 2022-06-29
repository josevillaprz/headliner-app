import React, { useState } from "react";

// COMPONENTS
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import EventList from "../components/EventList/EventList";

const HomePage = (props) => {
  //   // STATE
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);
  const [eventList, setEventList] = useState([]);

  //   // FUNCTIONS
  const changeHandler = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // Make API request if not blank
    if (searchText.trim() !== "") {
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
  };

  // JSX
  return (
    <div>
      {/* <Hero submitHandler={submitHandler} changeHandler={changeHandler} /> */}
      <SearchBar submitHandler={submitHandler} changeHandler={changeHandler} />
      {eventList.length > 0 && <EventList events={eventList} />}
    </div>
  );
};

export default HomePage;
