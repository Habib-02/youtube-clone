import { Component } from "react";
import styles from "./Notification.module.css";
import { IoMdNotificationsOutline } from "react-icons/io";

class Notification extends Component {
  render() {
    return (
      <>
        <IoMdNotificationsOutline className={styles.notification} />
      </>
    );
  }
}

export default Notification;
