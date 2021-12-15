// style sheet import
import './App.css';

// react browser import
import { BrowserRouter as Router } from 'react-router-dom' 

// component imports
import Header from './components/Header'
import Routes from './components/Routes'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <div className="App" style={styles.container}>
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


const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh'
  }
}