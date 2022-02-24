import styles from "./basicCheckBox.module.scss";
const BasicCheckBox = ({ id, text, checkBoxStyle, textStyle }) => {
  return (
    <section className={styles.commonCheckbox}>
      <input type="checkbox" id={id} className={checkBoxStyle} />
      <label htmlFor={id} className={textStyle}>
        {text}
      </label>
      {/* <BasicBtn
        text={"내용 보기"}
        btnStyle={classNames(styles.showBtn, basicBtnStyle.btn_transparent)}
        textStyle={styles.showBtnText}
      /> */}
    </section>
  );
};

export default BasicCheckBox;
