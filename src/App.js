import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App" style={styles.container}>
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

const styles = {
  container: {
    position: "relative",
    minHeight: "100vh",
  },
};
