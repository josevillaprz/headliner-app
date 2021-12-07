import React from 'react';

const EventCard = (props) => {
    return (
        <article>
            {console.log(props.event.images)}
            <img src={props.event.images[0].url} alt="event promotion" />
            <p>{props.event.name}</p>
            <p>{props.event.dates.start.localDate}</p>
        </article>
    );
};

export default EventCard;