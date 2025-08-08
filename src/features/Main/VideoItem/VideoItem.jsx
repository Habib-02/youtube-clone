import { Component } from "react";
import styles from "./VideoItem.module.css";

class VideoItem extends Component {
  render() {
    return (
      <div className={styles.videoItem}>
        <div className="videoThumbnail">
          <img src="/videoThumbnails/thumbnail1.jpg" alt="thumbnail" />
        </div>
        <div className={styles.videoDetails}>
          <h4>video title goes here</h4>
          <p className={styles.description}>Video Discription goes here</p>
          <p className={styles.videoMetaData}>
            <span className={styles.views}>35 views</span>
            <span className={styles.uploadDate}>12 years ago</span>
          </p>
        </div>
      </div>
    );
  }
}

export default VideoItem;
