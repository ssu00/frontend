import styles from "./inputBox.module.scss";
const InputBox = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      className={styles.inputBox}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default InputBox;
