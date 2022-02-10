import styles from "./selectButton.module.scss";
const SquareButton = ({ category, element, showModal }) => {
  return (
    <div className={styles.squareBtn}>
      <button type="button" className={styles.btn} onClick={showModal}>
        <span className={styles.category}>{category}</span>
        <span className={styles.element}>{element}</span>
        <span className={styles.arrow} />
      </button>
    </div>
  );
};
export default SquareButton;
