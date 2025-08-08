import { Component } from "react";
import styles from "./Main.module.css";
import VideoPlayer from "./VideoPlayer";
import VideoInformation from "./VideoInformation";
import VideoDiscription from "./VideoDescription";
import RecommendationVideos from "./RecomendationVideos";

class Main extends Component {
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
