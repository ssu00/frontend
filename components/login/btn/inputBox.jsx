import styles from "./inputBox.module.scss";
const InputBox = ({ type, placeholder, onChange, value, diff }) => {
  return (
    <input
      type={type}
      className={diff == 1 ? styles.inputBox2 : styles.inputBox}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
export default InputBox;
