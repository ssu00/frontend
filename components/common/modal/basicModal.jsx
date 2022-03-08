import { BasicBtn, basicBtnStyle } from "..";
import styles from "./basicModal.module.scss";
import classNames from "classnames";
import { IC_Check, IC_CloseCircle } from "../../../icons";
const BasicModal = ({ modalStyle, notice, btnText, btnClick }) => {
  return (
    <section
      className={modalStyle == "round" ? styles.roundModal : styles.squareModal}
    >
      <div>
        {btnText === "강의 등록 취소" && (
          <IC_CloseCircle width="24" height="24" className={styles.closeIcon} />
        )}
        {btnText == "내 강의 바로가기" && <IC_Check width="24" height="24" />}
      </div>
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
