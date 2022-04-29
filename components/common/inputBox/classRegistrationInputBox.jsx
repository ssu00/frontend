import styles from "./classRegistrationInputBox.module.scss";
const ClassRegistrationInputBox = ({ placeholder, value, onChange, limit }) => {
  return (
    <div className={styles.classRegistrationInputBox}>
      <textarea
        className={styles.inputBox}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <h1 className={styles.textLimit}>{limit}</h1>
    </div>
  );
};

export default ClassRegistrationInputBox;
