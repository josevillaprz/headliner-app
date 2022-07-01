import React from "react";
import Button from "../Button/Button";
import styles from "./EventDetailCard.module.css";

const EventDetailCard = ({ event }) => {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={event.images[2].url} alt="event" className={styles.img} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{event.name}</h1>
          <p>
            {event._embedded.venues[0].city.name}
            {" ,"} {event._embedded.venues[0].country.countryCode}
          </p>
        </div>
        <p className={styles.label}>{event._embedded.venues[0].name}</p>
        <p>{event.dates.start.localDate}</p>
        <Button text="Tickets" url={event.url} />
      </div>
    </section>
  );
};

export default EventDetailCard;
