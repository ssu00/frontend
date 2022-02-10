import styles from "./button.module.scss";
const BlueBtn = ({ disable, text, onClick }) => {
  return (
    <button
      type="button"
      className={disable ? styles.disabledBtn : styles.bluebtn}
      onClick={onClick}
      disabled={disable}
    >
      <span className={styles.btnText}>{text}</span>
    </button>
  );
};
export default BlueBtn;
