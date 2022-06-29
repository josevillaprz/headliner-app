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

// const styles = {
//   container: {
//     width: "336px",
//     height: "360px",
//     backgroundColor: "#F7F7F7",
//     borderRadius: "20px",
//     boxShadow:
//       "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
//     margin: "20px",
//     listStyleType: "none",
//   },

//   details: {
//     borderRadius: "0 0 20px 20px",
//     display: "grid",
//     gridTemplateColumns: "50% 50%",
//     gridTemplateRows: "60px 40px",
//     justifyContent: "center",
//     padding: "0 15px",
//     marginBottom: "15px",
//   },

//   img: {
//     width: "100%",
//     height: "200px",
//     borderRadius: "20px 20px 0 0",
//   },

//   title: {
//     font: "900 18px lato",
//     color: "#1F2B45",
//     gridColumn: "1 / 3",
//     alignSelf: "start",
//   },

//   location: {
//     font: "400 16px lato",
//     alignSelf: "end",
//     color: "#636B7D",
//   },

//   date: {
//     font: "700 16px lato",
//     alignSelf: "end",
//     color: "#636B7D",
//   },
// };
