import React from "react";
import styles from "./Push.module.scss";
function Push(props) {
  const clicked = (e) => {
    e.preventDefault();

    if (e.currentTarget.className === "") {
      e.currentTarget.className = `${styles.on}`;
    } else {
      e.currentTarget.className = "";
    }
  };
  return (
    <div className={styles.container}>
      <h5>푸시 알림</h5>
      <div className={styles.list_box}>
        <h6>채팅 알림</h6>

        <span>멘토를 포함한 타인에게 메세지가 도착하면 알려드립니다. </span>
        <button onClick={clicked}>
          <div className={styles.circle}></div>
        </button>
      </div>
      <div className={styles.list_box}>
        <h6>댓글 알림</h6>
        <span>자유게시판에 작성한 글에 새 댓글이 등록되면 알려드립니다. </span>
        <button className={styles.on} onClick={clicked}>
          <div className={styles.circle}></div>
        </button>
      </div>
    </div>
  );
}

export default Push;
