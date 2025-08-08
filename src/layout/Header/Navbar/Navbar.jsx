import { Component } from "react";
import styles from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

class Navbar extends Component {
  render() {
    return (
      <>
        <RxHamburgerMenu className={styles.menuIcon} />
      </>
    );
  }
}

export default Navbar;
