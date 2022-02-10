import styles from "./mainBtn.module.scss";
const WhiteBtn = ({ text, onClick }) => {
  return (
    <button type="button" className={styles.whiteBtn} onClick={onClick}>
      <span className={styles.blueText}>{text}</span>
    </button>
  );
};

const BlueBtn = ({ text, onClick }) => {
  return (
    <button type="button" className={styles.blueBtn} onClick={onClick}>
      <span className={styles.whiteText}>{text}</span>
    </button>
  );
};

export { WhiteBtn, BlueBtn };
