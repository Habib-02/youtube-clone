import React from "react";
import styles from "./Header.module.css";
import Navbar from "../navigation/Navbar";

import { IoLogoYoutube } from "react-icons/io";
import SearchBar from "../searchBar/SearchBar";
import CreateButton from "../createButton/CreateButton";
import Notification from "../notification/Notification";
import User from "../user/User";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className={styles.headerContainer}>
          <div className={styles["group-1"]}>
            <Navbar />
            <div className={styles["logo-container"]}>
              <IoLogoYoutube className={styles.logo} />
              <span>MyTube</span>
            </div>
          </div>
          <SearchBar />
          <div className={styles.buttons}>
            <CreateButton />
            <Notification />
            <User />
          </div>
        </div>
      </>
    );
  }
}
export default Header;
