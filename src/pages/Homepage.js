import React from 'react';

// component import
import Hero from '../components/Hero'
import EventList from '../components/EventList'

const HomePage = (props) => {
    return(
        <div>
            <Hero/>
            <EventList title='Popular events...' events={props.events}/>
        </div>
    )
}

export default HomePage;