import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom' 

// component imports
import Header from './components/Header'
import Routes from './components/Routes'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Routes />
        </main>
        <Footer/>
      </div>
    </Router>

  )
}

export default App;
