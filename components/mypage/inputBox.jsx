import styles from "./inputBox.module.scss";
const InputBox = ({ text, order, value, setValue }) => {
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleChange = (e, type) => {
    setValue(e.target.value);
  };

  const EducationLevelType = ["ELEMENTARY", "MIDDLE", "HIGH", "UNIVERSITY"];
  return (
    <section
      className={
        order == 1
          ? styles.myPageInput1
          : order == 2
          ? styles.myPageInput2
          : styles.myPageInput3
      }
    >
      {text === "최종 학력" ? (
        <div style={{ display: "flex" }}>
          <div className={styles.text}>
            {" "}
            <span className={styles.important}>*</span>
            {text}
          </div>
          <select
            className={styles.educationLevel}
            name="type"
            onChange={(e) => handleChange(e, "type")}
            value={value}
          >
            <option value="">선택</option>
            {EducationLevelType.map((type, idx) => {
              return (
                <option key={idx} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
      ) : (
        <>
          <div className={styles.text}>{text}</div>
          <input
            type="text"
            className={styles.inputBox}
            onChange={onChangeValue}
            value={value}
          ></input>
        </>
      )}
    </section>
  );
};

const ThickInputBox = ({ type, placeholder, setValue }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.thickInputBox}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

const ThickInputBoxWithTitle = ({ title, type, placeholder, setValue }) => {
  return (
    <div className={styles.withTitle}>
      <h1 className={styles.title}>{title}</h1>
      <ThickInputBox
        type={type}
        placeholder={placeholder}
        setValue={setValue}
      />
    </div>
  );
};

export { ThickInputBox, ThickInputBoxWithTitle };
export default InputBox;
