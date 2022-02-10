import styles from "./addDelete.module.scss";
const AddBtn = ({ AddClasses }) => {
  return (
    <button type="button" className={styles.addBtn} onClick={AddClasses}>
      <span className={styles.addText}>추가</span>
    </button>
  );
};

const DeleteBtn = ({ DeleteClasses }) => {
  return (
    <button type="button" className={styles.deleteBtn} onClick={DeleteClasses}>
      <span className={styles.deleteText}>⨉</span>
    </button>
  );
};

export { AddBtn, DeleteBtn };
