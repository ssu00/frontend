import React from "react";
import styles from "./ReviewModal.module.scss";

const ReviewModal = ({ mainText, subText, cancelBtn, confirmBtn }) => {
  return (
    <section className={styles.modalStyle}>
      <article className={styles.roundModal}>
        <h3 className={styles.title}>{mainText}</h3>
        <p className={styles.subTitle}>{subText}</p>

        <div className={styles.btnSection}>
          <button className={styles.cancel} onClick={cancelBtn}>
            <span>취소</span>
          </button>
          <button className={styles.check} onClick={confirmBtn}>
            <span>확인</span>
          </button>
        </div>
      </article>
    </section>
  );
};

export default ReviewModal;
