import { BasicBtn, basicBtnStyle } from "..";
import styles from "./basicModal.module.scss";
import classNames from "classnames";
const BasicModal = ({ modalStyle, notice, btnText, btnStyle }) => {
  return (
    <section className={modalStyle}>
      <p className={styles.noticeText}>{notice}</p>
      <BasicBtn
        text={btnText}
        btnStyle={classNames(styles.btnStyle, basicBtnStyle.btn_blue)}
        textStyle={styles.btnTextStyle}
      />
    </section>
  );
};

export default BasicModal;
