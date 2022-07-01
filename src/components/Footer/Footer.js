import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <NavLink to="/">
        <img src={logo} alt="hedliner website logo" className={styles.logo} />
      </NavLink>
      <nav>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/Contact" className={styles.link}>
          Blog
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;

// const styles = {
//   footer: {
//     backgroundColor: "#F7F7F7",
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     height: "100px",
//     padding: "0 102px",
//     justifyContent: "space-between",
//     marginTop: "60px",
//   },

//   logo: {
//     width: "140px",
//   },

//   navlink: {
//     margin: "0 20px",
//     font: "900 16px lato",
//     textDecoration: "none",
//     color: "#1f2b45",
//   },
// };
