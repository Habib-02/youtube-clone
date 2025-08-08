import { Component } from "react";
import styles from "./VideoInformation.module.css";

import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosMore } from "react-icons/io";

class VideoInformation extends Component {
  render() {
    return (
      <>
        <h1 className={styles.videoTitle}>
          The Smiths - Heaven Knows I'm Miserable Now (Official Music Video)
        </h1>
        <div className={styles.channelMetaData}>
          <div className={styles.channelInfo}>
            <div className={styles.group1}>
              <div className={styles.channelAvatar}>
                <img src="/avatar/avatar.jpg" alt="The Smith Avatar" />
              </div>
              <div className={styles.channelName}>
                <h5>The Smiths</h5>
                <p>1.27M subscribers</p>
              </div>
            </div>
            <div className="group2">
              <button className={styles.subButton}>Subscribe</button>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.likeDislikeButton}>
              <button className={`${styles.btn} ${styles.likeButton}`}>
                <AiOutlineLike className={styles.btnLogo} />
                680K
              </button>
              <button className={`${styles.btn} ${styles.dislikeButton}`}>
                <AiOutlineDislike className={styles.btnLogo} />
              </button>
            </div>
            <div className={styles.shareButton}>
              <button className={`${styles.btn}`}>
                <PiShareFatLight className={styles.btnLogo} />
                Share
              </button>
            </div>
            <div className={styles.downloadButton}>
              <button className={`${styles.btn}`}>
                <LiaDownloadSolid className={styles.btnLogo} />
                Download
              </button>
            </div>
            <div className={styles.moreButtons}>
              <button className={`${styles.btn}`}>
                <IoIosMore className={styles.btnLogo} />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VideoInformation;
