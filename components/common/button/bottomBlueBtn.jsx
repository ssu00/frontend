import styles from "./bottomBlueBtn.module.scss";
import classNames from "classnames";
import { BasicBtn } from "..";
import { basicBtnStyle } from "..";

const BottomBlueBtn = ({ text, onClick, disable }) => {
  return (
    <div className={styles.footer}>
      <BasicBtn
        text={text}
        onClick={onClick}
        disable={disable}
        btnStyle={classNames(styles.completeBtn, basicBtnStyle.btn_blue)}
        textStyle={styles.completeBtnText}
      />
    </div>
  );
};

export default BottomBlueBtn;
