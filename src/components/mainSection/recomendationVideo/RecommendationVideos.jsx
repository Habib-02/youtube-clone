import React from "react";
import styles from "./RecommendationVideos.module.css";
import VideoItem from "../videoItem/VideoItem";

class RecommendationVideos extends React.Component {
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
