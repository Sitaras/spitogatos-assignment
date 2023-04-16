import React from "react";
import CloseSearch from "../../../assets/CloseSearch.svg";

import styles from "./Search.module.css";

function Search({ handleCloseSearch }) {
  return (
    <div className={styles.searchContainer}>
      <form className={styles.containerSearch}>
        <img
          src={CloseSearch}
          alt="close search"
          className={styles.closeSearch}
          onClick={() => {
            const body = document.body;
            body.className = "";
            handleCloseSearch();
          }}
        />
        <div className={styles.innerContainer}>
          <input
            type="text"
            className={styles.customInput}
            placeholder="Start Typing"
          />
        </div>
        <div className={styles.innerContainer}>
          <button className={styles.searchBtn}>Search</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
