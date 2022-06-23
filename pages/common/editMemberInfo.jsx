import { useEffect, useState } from "react";
import router from "next/router";
import { BottomBlueBtn, TopBar } from "../../components/common";
import styles from "./auth/signup.module.scss";
import BasicDataBlock from "../../components/mentor/signup/basicDataBlock";
import AddrBlock from "../../components/mentor/signup/addrBlock";
import * as cookie from "cookie";
import { editMyInfo } from "../../core/api/User/editMyInfo";
import EditInfo from "../../components/mentee/profileEdit/EditInfo";
import EditInfoErr from "../../utils/errorHandling/editInfoErr";

export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const role = cookie.parse(context.req.headers.cookie).role;

  return {
    props: {
      token,
      role,
    },
  };
};

const EditMemberInfo = ({ token, role }) => {
  const [user, setUser] = useState({
    nickname: "",
    email: "",
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

  const saveChanges = async () => {
    const params = {
      birthYear: user.birth,
      gender: user.gender,
      nickname: user.nickname,
      phoneNumber: user.phone,
      zone: `${addr.statePick} ${addr.sigunguPick} ${addr.dongPick}`,
    };

    try {
      await editMyInfo(token, params);
      router.back();
    } catch (error) {
      console.error(error);
    }
  };

  const goBack = () => {
    return role === "ROLE_MENTEE"
      ? router.push("/mentee/mypage/profileEdit")
      : router.push("/mentor/mypage");
  };

  useEffect(() => {
    EditInfoErr({ dupCheck, user }, setCheckError);
  }, [user, dupCheck]);

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
      <TopBar text={"회원정보 수정"} onClick={goBack} />
      <div className={styles.contentSection}>
        <EditInfo
          datas={{ user, setUser, dupCheck, setDupCheck, checkError }}
        />
        <div className={styles.selectSection}>
          <BasicDataBlock datas={{ user, setUser }} />
          <AddrBlock datas={{ addr, setAddr }} />
        </div>
      </div>

      <BottomBlueBtn
        text={"저장"}
        disabled={checkError.isError}
        onClick={saveChanges}
      />
    </section>
  );
};

export default EditMemberInfo;
