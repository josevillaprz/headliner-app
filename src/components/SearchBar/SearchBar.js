import React from "react";
import styles from "./SearchBar.module.css";

const Search = ({ submitHandler, changeHandler }) => {
  return (
    <form onSubmit={submitHandler} className={styles.container}>
      <input
        type="search"
        placeholder="Search for artists, city, or events"
        onChange={changeHandler}
        className={styles.input}
      />
      <button type="submit" className={styles.btn}>
        Search
      </button>
    </form>
  );
};

export default Search;
