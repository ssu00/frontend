import styles from "./textBtn.module.scss";
const TextBtn = ({ text, onClick }) => {
  return (
    <button type="button" className={styles.textBtn} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default TextBtn;
