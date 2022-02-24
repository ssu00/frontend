import styles from "./classRegistrationInputBox.module.scss";
const ClassRegistrationInputBox = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      className={styles.classRegistrationInputBox}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default ClassRegistrationInputBox;
