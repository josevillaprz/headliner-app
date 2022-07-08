import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <NavLink to="/headliner-app">
        <img src={logo} alt="hedliner website logo" className={styles.logo} />
      </NavLink>
      <nav>
        <NavLink to="/headliner-app" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/blog" className={styles.link}>
          Blog
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
