import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={styles.button}>
      {text}
    </a>
  );
};

export default Button;
