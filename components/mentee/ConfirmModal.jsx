import React from "react";
import styles from "./ReviewModal.module.scss";

const ConfirmModal = ({ mainText, subText, confirm }) => {
  return (
    <section className={styles.modalStyle}>
      <article className={styles.roundModal}>
        <h3 className={styles.title}>{mainText}</h3>
        <p className={styles.subTitle}>{subText}</p>

        <div className={styles.confirmSection}>
          <button className={styles.confirm} onClick={confirm}>
            <span>확인</span>
          </button>
        </div>
      </article>
    </section>
  );
};

export default ConfirmModal;
