import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import styles from "./Event.module.css";
import EventDetailCard from "../../components/EventDetailCard/EventDetailCard";

const Event = () => {
  const [event, setEvent] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
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
