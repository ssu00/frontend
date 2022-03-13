import styles from "./bottomBlueBtn.module.scss";
import classNames from "classnames";
import { BasicBtn } from "..";
import { basicBtnStyle } from "..";

const BottomBlueBtn = ({ text, onClick, disabled }) => {
  return (
    <div className={styles.footer}>
      <BasicBtn
        text={text}
        onClick={onClick}
        disabled={disabled}
        btnStyle={classNames(
          disabled == true ? styles.completeBtnDisable : styles.completeBtn,
          disabled == true ? basicBtnStyle.btn_gray : basicBtnStyle.btn_blue
        )}
        textStyle={styles.completeBtnText}
      />
    </div>
  );
};

export default BottomBlueBtn;
