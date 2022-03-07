import { BasicBtn, basicBtnStyle } from "..";
import styles from "./basicModal.module.scss";
import classNames from "classnames";
const BasicModal = ({ modalStyle, notice, btnText, btnClick }) => {
  return (
    <section
      className={modalStyle == "round" ? styles.roundModal : styles.squareModal}
    >
      <div
        className={
          btnText == "강의 등록 취소"
            ? styles.x_icon
            : btnText == "내 강의 바로가기"
            ? styles.check_icon
            : ""
        }
      />
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
