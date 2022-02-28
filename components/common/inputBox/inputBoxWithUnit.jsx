import styles from "./inputBoxWithUnit.module.scss";
const InputBoxWithUnit = ({ type, unit, placeholder, onChange, value }) => {
  return (
    <div className={styles.inputBoxWithUnit}>
      <input
        type={type}
        className={styles.inputBox}
        placeholder={placeholder}
        onChange={onChange}
        onChange={onChange}
        value={value == "" ? 0 : value}
      />
      <strong className={styles.unit}>{unit}</strong>
    </div>
  );
};

export default InputBoxWithUnit;
