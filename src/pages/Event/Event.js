import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// COMPONENTS
import Loader from "../../components/Loader/Loader";
import EventDetailCard from "../../components/EventDetailCard/EventDetailCard";

// STYLING
import styles from "./Event.module.css";

const Event = () => {
  // HOOKS
  const [event, setEvent] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // scrolls to top of page
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "auto",
    });
    // fetching event clicked based on query ID string
    const fetchEvent = async () => {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=bKX5jS9T2TlroD8wMcQ0Gth24As1CZF6&id=${searchParams.get(
          "id"
        )}`
      );
      const data = await response.json();
      setEvent(data._embedded.events[0]);
    };
    fetchEvent();
  }, []);

  return (
    <main className={styles.container}>
      {event === "" ? <Loader /> : <EventDetailCard event={event} />}
    </main>
  );
};

export default Event;
