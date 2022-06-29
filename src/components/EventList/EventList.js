import React from "react";
import EventCard from "../EventCard/EventCard";
import styles from "./EventList.module.css";

const EventList = ({ events }) => {
  return (
    <ul className={styles.container}>
      {events.map((event) => (
        <li className={styles.item}>
          <EventCard event={event} key={event.id} />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
