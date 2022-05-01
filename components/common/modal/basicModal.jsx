import { BasicBtn, basicBtnStyle } from "..";
import styles from "./basicModal.module.scss";
import classNames from "classnames";
import { IC_Check, IC_CloseCircle, IC_CloseRoundGray } from "../../../icons";

const ModalIcon = ({ btnText }) => {
  switch (btnText) {
    case "강의 등록 취소":
      return (
        <IC_CloseCircle width="24" height="24" className={styles.closeIcon} />
      );
    case "내 강의 바로가기":
      return <IC_Check width="24" height="24" />;
    case "확인-err":
      return <IC_CloseRoundGray width="24" height="24" />;
    case "확인-no err":
      return <IC_Check width="24" height="24" />;
    default:
      return <></>;
  }
};

const BasicModal = ({ modalStyle, notice, btnText, btnClick, err, ing }) => {
  let text = btnText;
  if (text == "확인" && modalStyle == "round") {
    text = err ? "확인-err" : "확인-no err";
  }

  return (
    <div
      className={modalStyle == "round" ? styles.roundModal : styles.squareModal}
    >
      <ModalIcon btnText={text} />
      <p>{notice}</p>
      {!ing && (
        <BasicBtn
          text={btnText}
          btnStyle={classNames(
            err ? basicBtnStyle.btn_gray : basicBtnStyle.btn_blue,
            styles.btnStyle
          )}
          textStyle={styles.btnTextStyle}
          onClick={btnClick}
        />
      )}
    </div>
  );
};

export default BasicModal;
