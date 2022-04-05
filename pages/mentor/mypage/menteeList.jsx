import { useEffect, useState } from "react";
import * as cookie from "cookie";
import { BottomTab, TopBar } from "../../../components/common";
import styles from "./menteeList.module.scss";
import router from "next/router";
import { DecideOpenOrClose } from "../../../components/mentor/mypage/menteeListLine";
import GetMyMentees from "../../../core/api/Mentor/getMyMentees";
import { ModalWithBackground, BasicModal } from "../../../components/common";

export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  let myMenteeClosed = await GetMyMentees(token, 1, true);
  let myMenteeOpened = await GetMyMentees(token, 1, false);
  // if (!menteeClosed) {
  //   menteeClosed = null;
  // }
  // if (!menteeOpened) {
  //   menteeOpened = null;
  // }
  // const myMenteeClosed = JSON.stringify(menteeClosed);
  // const myMenteeOpened = JSON.stringify(menteeOpened);

  return {
    props: { token, myMenteeClosed, myMenteeOpened },
  };
};

const MenteeList = ({ token, myMenteeClosed, myMenteeOpened }) => {
  const [closedMentee, setClosedMentee] = useState(myMenteeClosed);
  const [openedMentee, setOpenedMentee] = useState(myMenteeOpened);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);

  return (
    <section className={styles.menteeListSection}>
      {modal ? (
        <ModalWithBackground setModal={setModal}>
          <BasicModal
            notice={"아직 작성된 리뷰가 없습니다."}
            btnText={"확인"}
            modalStyle={"square"}
          />
        </ModalWithBackground>
      ) : (
        <></>
      )}
      <TopBar
        text={"멘티 목록"}
        onClick={() => router.push("/mentor/mypage")}
      />
      <div className={styles.ing}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>강의 진행 중인 멘티</h1>
        </div>
        {closedMentee.content.map((data, i) => {
          return (
            <DecideOpenOrClose
              data={data}
              token={token}
              closed={false}
              page={page}
              setModal={setModal}
            />
          );
        })}
      </div>

      <div className={styles.line} />

      <div className={styles.finished}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>강의 종료된 멘티</h1>
        </div>
        {openedMentee.content.map((data, i) => {
          return (
            <DecideOpenOrClose
              data={data}
              token={token}
              closed={true}
              page={page}
              setModal={setModal}
            />
          );
        })}
      </div>

      <BottomTab num={[0, 0, 0, 1]} />
    </section>
  );
};

export default MenteeList;
