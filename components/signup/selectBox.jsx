import styles from "./selectBox.module.scss";
const SelectBox = ({ placeholder, num, btnText, onClick, id, onChange }) => {
  return num == 1 ? (
    <input
      type="number"
      placeholder={placeholder}
      className={styles.signUpSelect}
      onChange={onChange}
    />
  ) : num == 2 ? (
    <button
      type="button"
      className={styles.signUpSelectBtn}
      onClick={onClick}
      id={id}
      value={btnText}
    >
      <span
        className={
          btnText == "시" || btnText == "군" || btnText == "구"
            ? styles.btnText
            : styles.btnText2
        }
      >
        {btnText}
      </span>
    </button>
  ) : (
    <button
      type="button"
      className={styles.signUpSelectBtn}
      onClick={onClick}
      id={id}
      value={btnText}
    >
      <span className={styles.btnText}>{btnText == "" ? "성별" : btnText}</span>
    </button>
  );
};
export default SelectBox;
