import React from 'react';
import { Link } from 'react-router-dom'

import EventCard from '../components/EventCard'

const EventList = (props) => {
    return (
        <section style={styles.container}>
            <h1>{props.title}</h1>
            <ul style={styles.list}>
                {props.events.map((event) => (
                    <Link to={`/${event.id}`} key={event.id}>
                        <EventCard event={event} key={event.id} />
                    </Link>
                ))}
            </ul>
        </section>
    );
};

export default EventList;

const styles = {
    container: {
        padding: '0 120px',
        marginTop: '100px'
    },

    list: { 
        display: 'flex',
        padding: '0',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}