import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../EventCard/EventCard";
import styles from "./EventList.module.css";

const EventList = ({ events }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Search results...</h1>
      <ul className={styles.listContainer}>
        {events.map((event) => (
          <li className={styles.item}>
            <Link to={`/event?id=${event.id}`}>
              <EventCard event={event} key={event.id} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventList;
