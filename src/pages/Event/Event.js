import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import styles from "./Event.module.css";

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
      {event === "" ? (
        <Loader />
      ) : (
        <section>
          <div>
            <img src={event.images[2].url} alt="promo content" />
          </div>
          <h1 className={styles.title}>{event.name}</h1>
          <Button url={event.url} btnText="Tickets" />
        </section>
      )}
    </main>
  );
};

export default Event;
