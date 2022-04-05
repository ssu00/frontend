import classNames from "classnames";
import styles from "./EditInfo.module.scss";

import { IC_Check } from "../../../icons";
import { BasicBtn, BasicInputBox, basicBtnStyle } from "../../common";
import { NickNameDupCheck, EmailDupCheck } from "../../../core/api/Login";
import { EmailValidation } from "../../../utils/validation";

const EditInfo = ({ datas }) => {
  const { user, setUser, dupCheck, setDupCheck, checkError } = datas;
  const SetDupState = (propTrue, propFalse) => {
    setDupCheck({
      ...dupCheck,
      [propFalse]: false,
      [propTrue]: true,
    });
  };

  return (
    <div className={styles.inputSection}>
      <div className={styles.inputWithDupBtn}>
        <BasicInputBox
          type="text"
          style={styles.signupInput}
          placeholder={"닉네임"}
          onChange={(e) => setUser({ ...user, nickname: e.target.value })}
          value={user.nickname}
        />
        {dupCheck.nicknameDupSuccess ? (
          <IC_Check className={styles.successIC} />
        ) : (
          <BasicBtn
            text={"중복확인"}
            onClick={async () => {
              const nicknameDup = await NickNameDupCheck(user.nickname);
              if (nicknameDup) {
                SetDupState("nicknameDupError", "nicknameDupSuccess");
              } else {
                SetDupState("nicknameDupSuccess", "nicknameDupError");
              }
            }}
            btnStyle={classNames(basicBtnStyle.btn_blue, styles.dupBtn)}
            textStyle={styles.dupBtnText}
          />
        )}
      </div>
      <div className={styles.inputWithDupBtn}>
        <BasicInputBox
          type="email"
          style={styles.signupInput}
          placeholder={"ID(E-mail)"}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
          value={user.email}
        />
        {dupCheck.emailDupSuccess ? (
          <IC_Check className={styles.successIC} />
        ) : (
          <BasicBtn
            text={"중복확인"}
            onClick={async () => {
              if (!EmailValidation(user.email)) {
                return;
              } else {
                const emailDup = await EmailDupCheck(user.email);
                if (emailDup) {
                  SetDupState("emailDupError", "emailDupSuccess");
                } else {
                  SetDupState("emailDupSuccess", "emailDupError");
                }
              }
            }}
            btnStyle={classNames(basicBtnStyle.btn_blue, styles.dupBtn)}
            textStyle={styles.dupBtnText}
          />
        )}
      </div>
      <BasicInputBox
        type="text"
        style={styles.signupInput}
        placeholder={"휴대폰 번호('-' 제외)"}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
        value={user.phone}
      />
      <span className={styles.errText}>
        {checkError.isError ? checkError.errorMsg : ""}
      </span>
    </div>
  );
};

export default EditInfo;
