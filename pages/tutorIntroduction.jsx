import { useEffect, useState } from "react";
import styles from "./tutorIntroduction.module.scss";
import BottomTab from "../components/bottomtab";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import TutorInfoBox from "../components/mypage/tutorInfoBox";
import TutorProfileImg from "../components/mypage/tutorProfileImg";
import router from "next/router";
import axios from "axios";
const TutorIntroduction = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
  }
  const [img, setImg] = useState("");
  const [careers, setCareers] = useState([]);
  const [educations, setEducations] = useState([]);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const getUserInfo = () => {
    axios.get("/tutors/my-info").then((res) => {
      setEducations(res.data.educations[0]);
      setCareers(res.data.careers[0]);
    });
    axios.get("/users/my-info").then((res) => {
      const item = res.data;
      setImg(item.image);
      setName(item.name);
      setNickname(item.nickname);
      setPhoneNumber(item.phoneNumber);
      setEmail(item.email);
      setBio(item.bio);
    });
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <section className={styles.tutorIntroductionSection}>
      <OtherTopBar title={"튜터 소개"} url={"/profileEdit"} />
      <section className={styles.basicInfo}>
        <h1 className={styles.title}>기본정보</h1>
        <div className={styles.profile}>
          <TutorProfileImg img={img} />
          <div className={styles.info}>
            <TutorInfoBox category={"이름"} content={name} />
            <TutorInfoBox category={"닉네임"} content={nickname} />
            <TutorInfoBox category={"휴대폰번호"} content={phoneNumber} />
            <TutorInfoBox category={"이메일"} content={email} />
          </div>
        </div>
      </section>
      <div className={styles.line} />

      <section className={styles.academicInfo}>
        <h1 className={styles.title}>학력정보</h1>
        <TutorInfoBox
          category={"최종학력"}
          content={educations.educationLevel}
        />
        <TutorInfoBox category={"학교 명"} content={educations.schoolName} />
        <TutorInfoBox category={"전공 명"} content={educations.major} />
        <TutorInfoBox category={"그 외 학력"} content={educations.others} />
      </section>

      <section className={styles.careerInfo}>
        <h1 className={styles.title}>경력정보</h1>
        <TutorInfoBox category={"직업"} content={careers.job} />
        <TutorInfoBox category={"직장 명"} content={careers.companyName} />
        <TutorInfoBox category={"그 외 경력"} content={careers.others} />
        <TutorInfoBox category={"자격증"} content={careers.license} />
      </section>
      <section className={styles.intro}>
        <h1 className={styles.title}>소개</h1>
        <span className={styles.text}>{bio}</span>
      </section>
      <div className={styles.fixed}>
        <BottomTab num={3} />
        <button
          type="button"
          className={styles.edit}
          onClick={() => router.push("tutorInfoEdit")}
        />
      </div>
    </section>
  );
};

export default TutorIntroduction;
