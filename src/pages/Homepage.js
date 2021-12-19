import React, { useState, useEffect } from 'react';

// component import
import Hero from '../components/Hero'
import EventList from '../components/EventList'

const HomePage = (props) => {
    // hooks
    const [searchText, setSearchText] = useState(null)
    const [eventList, setEventList] = useState(null)

    const NewSearch = (e) => {
        e.preventDefault();
        // validate user input was correct need to implement ****
        const userInput = e.target[0].value
        // set state value once validated
        setSearchText(userInput);
    }

    useEffect(() => {
        if(searchText !== null){
            async function fetchAPI(){
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=${searchText}&apikey=bKX5jS9T2TlroD8wMcQ0Gth24As1CZF6`);
                const data = await response.json();
                setEventList(data._embedded.events)
            }
            fetchAPI();
        }
    }, [searchText])

    return(
        <div>
            <Hero event={NewSearch}/>
            {eventList !== null && <EventList title='Search results...' events={eventList}/> }
        </div>
    )
}

export default HomePage;