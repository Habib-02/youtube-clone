import React from "react";
import ReactPlayer from "react-player";

import styles from "./VideoPlayer.module.css";

class VideoPlayer extends React.Component {
  render() {
    return (
      <div className={styles.videoWrapper}>
        <ReactPlayer
          className={styles.videoPlayer}
          src="https://youtu.be/TjPhzgxe3L0?si=5KqoS-j3Lb2jVWBg"
          controls
          width={"100%"}
          height={"100%"}
        />
      </div>
    );
  }
}

export default VideoPlayer;
