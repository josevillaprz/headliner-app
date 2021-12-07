import React, { useEffect, useState } from 'react';

// style sheet import
import './App.css';

// react browser import
import { BrowserRouter as Router } from 'react-router-dom' 

// component imports
import Header from './components/Header'
import Routes from './components/Routes'
import Footer from './components/Footer'

function App() {
  // use state hook to store data returned from api request
 const[eventsList, setEventsList] = useState(null)
 const[loggedIn, setLoginStatus] = useState(false)

  // use effect hook to get api request and return data
  useEffect(() => {
    async function FetchAPI(){
      const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=bKX5jS9T2TlroD8wMcQ0Gth24As1CZF6')
      const data = await response.json()
      const events = data._embedded.events
      setEventsList(events)
      setLoginStatus(true)
    }
    FetchAPI()
  }, [])

  return (
    <Router>
      <div className="App">
        <Header/>
        {loggedIn ? 
          <main>
          <Routes events={eventsList}/>
          </main> : <div><p>Loading...</p></div>
        }
        <Footer/>
      </div>
    </Router>

  )
}

export default App;
