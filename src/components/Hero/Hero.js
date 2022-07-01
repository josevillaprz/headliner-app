import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Find your next big music event.</h1>
      <p className={styles.subheading}>Discover amazing events near you.</p>
    </div>
  );
};

export default Hero;
