import React from "react";
import styles from "./Hero.module.css";

const Hero = ({ image, title, subhead }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subheading}>{subhead}</p>
    </div>
  );
};

export default Hero;
