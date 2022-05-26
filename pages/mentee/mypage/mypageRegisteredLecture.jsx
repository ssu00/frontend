import * as cookie from "cookie";
import styles from "./mypageRegisteredLecture.module.scss";
import router from "next/router";
import { BottomTab, TopBar } from "../../../components/common";
import LectureBlock from "../../../components/mentee/myRegisteredLecture/LectureBlock";
import { getRegisteredLectures } from "../../../core/api/Mentee";
import NoWrite from "../../../components/mentee/NoWrite";

export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const role = cookie.parse(context.req.headers.cookie).role;
  const lectures = await getRegisteredLectures(token, 1);

  return {
    props: { token, lectures: JSON.parse(JSON.stringify(lectures)), role },
  };
};

const MypageRegisteredLecture = ({ token, lectures, role }) => {
  return (
    <section className={styles.LectureListSection}>
      <TopBar text={"구매한 강의"} onClick={() => router.back()} />
      <div className={styles.ing}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>전체 강의</h1>
        </div>
      </div>

      <div className={styles.line} />

      <div className={styles.finished}>
        {/* <div className={styles.titleBox}>
          <h1 className={styles.title}>2021.07.01</h1>
          <IC_ArrowRight />
        </div> */}
        {lectures.content.length !== 0 ? (
          lectures.content.map((lecture, idx) => (
            <LectureBlock key={idx} lecture={lecture} />
          ))
        ) : (
          <NoWrite text={"구매한 강의가 없습니다"} />
        )}
      </div>

      <BottomTab num={[0, 0, 0, 1]} role={role} />
    </section>
  );
};

export default MypageRegisteredLecture;
