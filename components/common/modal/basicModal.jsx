import { BasicBtn, basicBtnStyle } from "..";
import styles from "./basicModal.module.scss";
import classNames from "classnames";
const BasicModal = ({ modalStyle, notice, btnText, btnClick }) => {
  return (
    <section
      className={modalStyle == "round" ? styles.roundModal : styles.squareModal}
    >
      <p className={styles.noticeText}>{notice}</p>
      <BasicBtn
        text={btnText}
        btnStyle={classNames(basicBtnStyle.btn_blue, styles.btnStyle)}
        textStyle={styles.btnTextStyle}
        onClick={btnClick}
      />
    </section>
  );
};

export default BasicModal;
