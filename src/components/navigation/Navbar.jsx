import React from "react";
import styles from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <RxHamburgerMenu className={styles.menuIcon} />
      </>
    );
  }
}

export default Navbar;
