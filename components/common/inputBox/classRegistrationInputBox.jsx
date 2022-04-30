import styles from "./classRegistrationInputBox.module.scss";
const ClassRegistrationInputBox = ({ placeholder, value, onChange, limit }) => {
  return (
    <div className={styles.classRegistrationInputBox}>
      <textarea placeholder={placeholder} value={value} onChange={onChange} />
      <span className={styles.textLimit}>{limit}</span>
    </div>
  );
};

export default ClassRegistrationInputBox;
