import { Component } from "react";
import styles from "./RecommendationVideos.module.css";
import VideoItem from "../VideoItem";

class RecommendationVideos extends Component {
  render() {
    return (
      <section className={styles.recommendationVideos}>
        <h2>Recommendation</h2>
        <div className={styles.recommendations}>
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </div>
      </section>
    );
  }
}

export default RecommendationVideos;
