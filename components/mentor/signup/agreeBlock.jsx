import { useEffect } from "react";
import styles from "./agreeBlock.module.scss";
import { BasicCheckBox } from "../../common";

const AgreeBlock = ({ datas }) => {
  const { agree, setAgree } = datas;
  useEffect(() => {
    if (agree.one && agree.two && agree.three) {
      setAgree({ ...agree, all: true });
    } else {
      setAgree({ ...agree, all: false });
    }
  }, [agree.one, agree.two, agree.three]);

  return (
    <section className={styles.agreeSection}>
      <BasicCheckBox
        id={"agreeAll"}
        text={"전체 동의"}
        checkBoxStyle={styles.agreeCheckAll}
        textStyle={styles.agreeText}
        value={agree.all}
        onChange={() => {
          setAgree({
            all: !agree.all,
            one: !agree.all,
            two: !agree.all,
            three: !agree.all,
          });
        }}
      />
      <BasicCheckBox
        id={"agree1"}
        text={"[필수] 서비스 이용 약관에 동의합니다. "}
        checkBoxStyle={styles.agreeCheck}
        textStyle={styles.agreeText}
        value={agree.one}
        onChange={() => {
          setAgree({ ...agree, one: !agree.one });
        }}
      />
      <BasicCheckBox
        id={"agree2"}
        text={"[필수] 개인 정보 수집 및 이용에 동의합니다. "}
        checkBoxStyle={styles.agreeCheck}
        textStyle={styles.agreeText}
        value={agree.two}
        onChange={() => {
          setAgree({ ...agree, two: !agree.two });
        }}
      />
      <BasicCheckBox
        id={"agree3"}
        text={"[필수] 악의적 콘텐츠 제한에 동의합니다."}
        checkBoxStyle={styles.agreeCheck}
        textStyle={styles.agreeText}
        value={agree.three}
        onChange={() => {
          setAgree({ ...agree, three: !agree.three });
        }}
      />
    </section>
  );
};

export default AgreeBlock;
