import React from "react";
import styles from "./BoardOptionModal.module.scss";
import router from "next/router";
function BoardOptionModal({ handleOptionModal, postId }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.edit_box}>
          <div
            className={styles.review_edit}
            onClick={() => router.push(`/mentee/board/editpost/${postId}`)}
          >
            게시글 수정
          </div>
          <div className={styles.review_delete}>게시글 삭제</div>
        </div>
        <div className={styles.review_cancel} onClick={handleOptionModal}>
          닫기
        </div>
      </div>
    </div>
  );
}

export default BoardOptionModal;
