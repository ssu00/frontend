import Image from "next/image";
import React from "react";
import styles from "./BoardComment.module.scss";

const BoardComment = ({ content }) => {
  return (
    <div className={styles.commentSection}>
      <div className={styles.profileContainer}>
        <div className={styles.leftPannel}>
          <div className={styles.image}>
            <Image
              src={content.userImage ? content.userImage : "/"}
              alt=""
              width="40px"
              height="40px"
            />
          </div>
        </div>
        <div className={styles.rightPannel}>
          <div className={styles.name}>{content?.userNickname}</div>
          <div className={styles.date}>{content?.createdAt}</div>
        </div>
      </div>
      <div className={styles.boardContent}>{content.content}</div>
    </div>
  );
};

export default BoardComment;
