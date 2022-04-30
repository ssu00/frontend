import styles from "./inputBoxWithUnit.module.scss";
const InputBoxWithUnit = ({ type, unit, placeholder, onChange, value }) => {
  return (
    <div className={styles.inputBoxWithUnit}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value == "" ? 0 : value}
      />
      <strong>{unit}</strong>
    </div>
  );
};

export default InputBoxWithUnit;
