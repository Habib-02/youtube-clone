import React from "react";
import styles from "./User.module.css";

class User extends React.Component {
  render() {
    return (
      <>
        <button className={styles.user}>
          <span>H</span>
        </button>
      </>
    );
  }
}

export default User;
