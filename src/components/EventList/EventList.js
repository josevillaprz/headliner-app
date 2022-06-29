import React from "react";
import EventCard from "../EventCard/EventCard";
import styles from "./EventList.module.css";

const EventList = ({ events }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Search results...</h1>
      <ul className={styles.listContainer}>
        {events.map((event) => (
          <li className={styles.item}>
            <EventCard event={event} key={event.id} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventList;
