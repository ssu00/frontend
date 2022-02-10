import styles from "./inputBox.module.scss";
const InputBox = ({ title, placeholder, example, value, onChange, limit }) => {
  return (
    <div className={styles.inputBox}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.all}>
        <textarea
          className={styles.textBox}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
        <span className={styles.count}>
          {value?.length}/{limit}
        </span>
      </span>
      <br />
      <span className={styles.example}>{example}</span>
    </div>
  );
};

export default InputBox;
