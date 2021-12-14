import React from 'react';

import EventCard from '../components/EventCard'

const EventList = (props) => {
    return (
        <section style={styles.container}>
            <h1>{props.title}</h1>
            <ul style={styles.list}>
                <EventCard event={ props.events[0] }/>
                <EventCard event={ props.events[1] }/>
                <EventCard event={ props.events[2] }/>
                <EventCard event={ props.events[3] }/>
                <EventCard event={ props.events[4] }/>
                <EventCard event={ props.events[5] }/>
                <EventCard event={ props.events[6] }/>
            </ul>
        </section>
    );
};

export default EventList;

const styles = {
    container: {
        padding: '0 120px'
    },

    list: { 
        display: 'flex',
        padding: '0',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}