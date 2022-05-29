import styles from "./OptionModal.module.scss";

function OptionModal({ editClick, deleteClick, modalHandler }) {
  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <div className={styles.wrapper}>
        <div className={styles.edit_box}>
          <div className={styles.review_edit} onClick={editClick}>
            후기 수정
          </div>
          <div className={styles.review_delete} onClick={deleteClick}>
            후기 삭제
          </div>
        </div>
        <div className={styles.review_cancel} onClick={modalHandler}>
          취소
        </div>
      </div>
    </div>
  );
}

export default OptionModal;
