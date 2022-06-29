import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link to="/headliner-app">
        <img src={logo} alt="hedliner website logo" className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <Link to="/headliner-app" className={styles.link}>
          Home
        </Link>
        <Link to="blog" className={styles.link}>
          Blog
        </Link>
      </nav>
    </header>
  );
};

export default Header;
