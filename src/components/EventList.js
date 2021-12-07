import React from 'react';

import EventCard from '../components/EventCard'

const EventList = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                <EventCard event={ props.events[0] }/>
            </ul>
        </div>
    );
};

export default EventList;