import React from "react";
import styles from "./Notification.module.css";
import { IoMdNotificationsOutline } from "react-icons/io";

class Notification extends React.Component {
  render() {
    return (
      <>
        <IoMdNotificationsOutline className={styles.notification} />
      </>
    );
  }
}

export default Notification;
