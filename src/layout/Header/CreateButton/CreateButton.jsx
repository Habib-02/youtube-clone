import { Component } from "react";
import styles from "./CreateButton.module.css";

import { IoAddSharp } from "react-icons/io5";

class CreateButton extends Component {
  render() {
    return (
      <>
        <button className={styles.createButton}>
          <IoAddSharp />
          <span>Create</span>
        </button>
      </>
    );
  }
}

export default CreateButton;
