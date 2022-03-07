import styles from "./mentorIntroduction.module.scss";
import TopBar from "../../../components/common/tab/topBar";
import BottomTab from "../../../components/common/tab/bottomTab";
import router from "next/router";
import MyPageInfoLine from "../../../components/mentor/mypage/mypageInfoLine";
import GetMyInfoAsMentor from "../../../core/api/Mentor/getMyInfoAsMentor";
import * as cookie from "cookie";
import { TransEduLevelToKor } from "../../../components/mentor/transform";

export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const myInfoAsMentor = await GetMyInfoAsMentor(token);
  return {
    props: {
      myInfoAsMentor,
    },
  };
};

const MentorIntroduction = ({ myInfoAsMentor }) => {
  const user = myInfoAsMentor.user;
  const careers = myInfoAsMentor.careers[0];
  const edu = myInfoAsMentor.educations[0];
  const bio = myInfoAsMentor.bio;

  return (
    <section className={styles.mentorIntroductionSection}>
      <TopBar
        text={"멘토 소개"}
        onClick={() => router.push("/mentor/mypage/profileEdit")}
      />

      <section className={styles.basicInfo}>
        <h1 className={styles.title}>기본정보</h1>
        <div className={styles.profile}>
          <div>
            <MyPageInfoLine title={"이름"} content={user.name} />
            <MyPageInfoLine title={"닉네임"} content={user.nickname} />
            <MyPageInfoLine title={"휴대폰번호"} content={user.phoneNumber} />
            <MyPageInfoLine title={"이메일"} content={user.username} />
          </div>
        </div>
      </section>
      <span className={styles.line} />

      <section className={styles.additionalInfo}>
        <h1 className={styles.title}>학력정보</h1>
        <div>
          <MyPageInfoLine
            title={"최종학력"}
            content={TransEduLevelToKor(edu.educationLevel)}
          />
          <MyPageInfoLine title={"학교명"} content={edu.schoolName} />
          <MyPageInfoLine title={"전공명"} content={edu.major} />
          <MyPageInfoLine title={"그 외 학력"} content={edu.others} />
        </div>
      </section>

      <section className={styles.additionalInfo}>
        <h1 className={styles.title}>경력정보</h1>
        <div>
          <MyPageInfoLine title={"직업"} content={careers.job} />
          <MyPageInfoLine title={"직장명"} content={careers.companyName} />
          <MyPageInfoLine title={"그 외 경력"} content={careers.others} />
          <MyPageInfoLine title={"자격증"} content={careers.license} />
        </div>
      </section>

      <section className={styles.additionalInfo}>
        <h1 className={styles.title}>소개</h1>
        <span>{bio == "" || bio == null ? "-" : bio}</span>
      </section>

      <button
        type="button"
        className={styles.editBtn}
        onClick={() => router.push("/mentor/mypage/editMentorInfo")}
      >
        <div className={styles.editImg} />
      </button>
      <BottomTab num={[0, 0, 0, 1]} />
    </section>
  );
};

export default MentorIntroduction;
