import { Component } from "react";
import styles from "./VideoDescription.module.css";

class VideoDescription extends Component {
  render() {
    return (
      <div className={styles.videoDescription}>
        <span className={styles.time}>79M views</span>{" "}
        <span className={styles.time}>11 years ago</span>
        <span className={styles.hashTags}>
          #TheSmiths #HeavenKnowsImMiserableNow #HatfulOfHollow
        </span>
        <p>Official video for Heaven Knows I'm Miserable by The Smiths</p>
        <p>
          Stream The Smiths greatest hits here ▶{" "}
          <a href="https://lnk.to/TheSmithsHits">
            https://lnk.to/TheSmithsHits
          </a>
          …more
        </p>
      </div>
    );
  }
}

export default VideoDescription;
