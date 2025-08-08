import { Component } from "react";
import styles from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

class SearchBar extends Component {
  render() {
    return (
      <div
        className={`${styles.searchBar} ${
          this.props.showSearchBox ? styles.showSearch : ""
        }`}
      >
        {this.props.showSearchBox && (
          <FaArrowLeft
            className={styles.backArrow}
            onClick={this.props.handleShowSearchBox}
          />
        )}
        <input type="text" className={styles.search} />
        <button
          className={styles["search-icon-wrapper"]}
          onClick={this.props.handleShowSearchBox}
        >
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
