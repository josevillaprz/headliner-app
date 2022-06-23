import React, { useState, useEffect } from "react";
import Button from "../components/Button";

// import Button from '../components/Button'

const EventDetail = ({ match }) => {
  const [event, setEvent] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=bKX5jS9T2TlroD8wMcQ0Gth24As1CZF6&id=${match.params.id}`
      );
      const data = await response.json();
      setEvent(data._embedded.events[0]);
    };
    fetchEvent();
  }, [setEvent]);

  return (
    <div>
      {event === "" ? (
        <h1 style={styles.loading}>Loading...</h1>
      ) : (
        <div>
          <img src={event.images[0].url} alt="promo content" />
          <h1>{event.name}</h1>
          <Button url={event.url} btnText="Tickets" />
        </div>
      )}
    </div>
  );
};

export default EventDetail;

const styles = {
  loading: {
    height: "100%",
    textAlign: "center",
    marginTop: "300px",
    font: "900 50px lato",
  },
};
