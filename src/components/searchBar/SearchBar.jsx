import React from "react";
import styles from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";

class SearchBar extends React.Component {
  render() {
    return (
      <div className={styles.searchBar}>
        <input type="text" className={styles.search} />
        <button className={styles["search-icon-wrapper"]}>
          <CiSearch className={styles["search-icon"]} />
        </button>
        <button className={styles.mic}>
          <FaMicrophone />
        </button>
      </div>
    );
  }
}

export default SearchBar;
