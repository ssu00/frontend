import Image from "next/image";
import React from "react";
import { IC_CommentBubble, IC_HeartRedFill, IC_Report } from "../../../icons";
import styles from "./MainBoard.module.scss";

const MainBoard = ({ postDetail }) => {
  return (
    <div>
      <div className={styles.profileContainer}>
        <div className={styles.leftPannel}>
          <div className={styles.image}>
            <Image
              src={
                postDetail.userImage
                  ? postDetail.userImage
                  : "/samples/lecture.png"
              }
              alt="profile"
              width="40px"
              height="40px"
              x
            />
          </div>
        </div>
        <div className={styles.rightPannel}>
          <span className={styles.name}>{postDetail?.userNickname}</span>
          <div className={styles.rightBottom}>
            <span className={styles.date}>{postDetail?.createdAt}</span>
            <span className={styles.seen}>
              {`조회수 ${postDetail?.hits} 댓글 ${postDetail.commentCount}`}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.requestLecture}>강의요청</div>
        <span className={styles.title}>{postDetail.title}</span>
        <span className={styles.content}>{postDetail.content}</span>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.leftSide}>
          <button className={styles.likesButton}>
            <IC_HeartRedFill />
            {`좋아요 ${postDetail.likingCount}`}
          </button>
          <button className={styles.commentsButton}>
            <IC_CommentBubble />
            {`댓글 ${postDetail.commentCount}`}
          </button>
        </div>
        <div className={styles.rightSide}>
          <button className={styles.reportButton}>
            <IC_Report />
            신고
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
