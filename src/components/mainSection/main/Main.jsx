import React from "react";
import styles from "./Main.module.css";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import VideoInformation from "../videoInformation/VideoInformation";
import VideoDiscription from "../videoDescription/VideoDescription";
import RecommendationVideos from "../recomendationVideo/RecommendationVideos";

class Main extends React.Component {
  render() {
    return (
      <main className={styles.mainSection}>
        <div className={styles.videoPlayerWrapper}>
          <VideoPlayer />
          <VideoInformation />
          <VideoDiscription />
        </div>
        <RecommendationVideos />
      </main>
    );
  }
}

export default Main;
