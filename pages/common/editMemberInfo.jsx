import { useEffect, useState } from "react";
import router from "next/router";
import { BottomBlueBtn, TopBar } from "../../components/common";
import styles from "../mentor/signup.module.scss";
import SignUpErr from "../../utils/errorHandling/signupErr";
import UserBlock from "../../components/mentor/signup/userBlock";
import BasicDataBlock from "../../components/mentor/signup/basicDataBlock";
import AddrBlock from "../../components/mentor/signup/addrBlock";

const EditMemberInfo = () => {
  const [user, setUser] = useState({
    name: "",
    nickname: "",
    email: "",
    pw: "",
    pwConfirm: "",
    phone: "",
    birth: 2002,
    gender: "남자",
  });

  const [addr, setAddr] = useState({
    state: [],
    sigungu: [],
    dong: [],
    statePick: "서울특별시",
    sigunguPick: "",
    dongPick: "",
  });

  const [agree, setAgree] = useState({
    all: false,
    one: false,
    two: false,
    three: false,
  });

  const [checkError, setCheckError] = useState({
    isError: false,
    errorMsg: "",
  });

  const [dupCheck, setDupCheck] = useState({
    nicknameDupSuccess: false,
    nicknameDupError: false,
    emailDupSuccess: false,
    emailDupError: false,
  });

  useEffect(() => {
    SignUpErr({ dupCheck, user, agree }, setCheckError);
  }, [user, agree, dupCheck]);

  useEffect(() => {
    setDupCheck({
      ...dupCheck,
      nicknameDupSuccess: false,
      nicknameDupError: false,
    });
  }, [user.nickname]);

  useEffect(() => {
    setDupCheck({
      ...dupCheck,
      emailDupSuccess: false,
      emailDupError: false,
    });
  }, [user.email]);

  return (
    <section className={styles.signUp01}>
      <TopBar text={"회원정보 수정"} onClick={() => router.push("/")} />
      <div className={styles.contentSection}>
        <UserBlock
          datas={{ user, setUser, dupCheck, setDupCheck, checkError }}
        />
        <div className={styles.selectSection}>
          <BasicDataBlock datas={{ user, setUser }} />
          <AddrBlock datas={{ addr, setAddr }} />
        </div>
      </div>

      <BottomBlueBtn text={"저장"} disabled={checkError.isError} />
    </section>
  );
};

export default EditMemberInfo;
