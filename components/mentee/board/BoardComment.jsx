import Image from "next/image";
import React from "react";
import { deleteBoardComments } from "../../../core/api/Mentee";
import styles from "./BoardComment.module.scss";

const BoardComment = ({ token, content }) => {
  return (
    <div className={styles.commentSection}>
      <div className={styles.profileContainer}>
        <div className={styles.leftPannel}>
          <div className={styles.image}>
            <Image
              src={
                content.userImage ? content.userImage : "/samples/lecture.png"
              }
              alt=""
              width="32px"
              height="32px"
            />
          </div>
        </div>
        <div className={styles.rightPannel}>
          <div className={styles.name}>{content?.userNickname}</div>
          <div className={styles.date}>{content?.createdAt}</div>
        </div>
      </div>
      <div className={styles.boardContent}>{content.content}</div>
      <form
        className={styles.buttonContainer}
        onSubmit={async () => {
          const res = await deleteBoardComments(
            token,
            content.postId,
            content.commentId
          );
          if (res.status == 200) {
            alert("게시물이 삭제되었습니다.");
          } else {
            console.log(res.data.message);
          }
        }}
      >
        <button>삭제</button>
      </form>
    </div>
  );
};

export default BoardComment;
