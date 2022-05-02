import styles from "./bottomBlueBtn.module.scss";
import classNames from "classnames";
import { BasicBtn } from "..";
import { basicBtnStyle } from "..";

const BottomBlueBtn = ({ id, text, onClick, disabled }) => {
  return (
    <div className={styles.bottomBlueBtn}>
      <BasicBtn
        id={id}
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
