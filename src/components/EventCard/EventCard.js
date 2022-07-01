import React from "react";
import styles from "./EventCard.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillCalendar } from "react-icons/ai";

const EventCard = ({ event }) => {
  return (
    <article className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={event.images[2].url} alt="event" className={styles.img} />
      </div>
      <h2 className={styles.title}>{event.name}</h2>
      <div className={styles.detailsContainer}>
        <div className={styles.detail}>
          <IoLocationSharp
            size={20}
            style={{ color: "#2b2b2b", marginRight: "2px" }}
          />
          <p>
            {event._embedded.venues[0].city.name},{" "}
            {event._embedded.venues[0].country.countryCode}
          </p>
        </div>
        <div className={styles.detail}>
          <AiFillCalendar
            size={20}
            style={{ color: "#2b2b2b", marginRight: "5px" }}
          />
          <p>{event.dates.start.localDate}</p>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
