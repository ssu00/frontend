import React from "react";
import styles from "./OptionModal.module.scss";

function OptionModal(props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.edit_box}>
          <div className={styles.review_edit}>후기 수정</div>
          <div className={styles.review_delete}>후기 삭제</div>
        </div>
        <div className={styles.review_cancel} onClick={props.modalHandler}>
          취소
        </div>
      </div>
    </div>
  );
}

export default OptionModal;
