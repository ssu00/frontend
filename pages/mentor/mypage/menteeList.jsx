import { useState } from "react";
import * as cookie from "cookie";
import { BottomTab, TopBar } from "../../../components/common";
import styles from "./menteeList.module.scss";
import router from "next/router";
import { DecideOpenOrClose } from "../../../components/mentor/mypage/menteeListLine";
import { getMyMentees } from "../../../core/api/Mentor";
import { ModalWithBackground, BasicModal } from "../../../components/common";
import EmptyDataNotice from "../../../components/common/emptyDataNotice";

export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  let myMenteeClosed = await getMyMentees(true, token);
  let myMenteeOpened = await getMyMentees(false, token);

  return {
    props: { token, myMenteeClosed, myMenteeOpened },
  };
};

const MenteeList = ({ token, myMenteeClosed, myMenteeOpened }) => {
  const [closedMentee, setClosedMentee] = useState(myMenteeClosed);
  const [openedMentee, setOpenedMentee] = useState(myMenteeOpened);
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
          <h1 className={styles.title}>진행 중인 강의의 멘티</h1>
        </div>
        <EmptyDataNotice data={openedMentee} content={"멘티"} />
        {openedMentee?.map((data, i) => {
          return (
            <DecideOpenOrClose
              key={i}
              data={data}
              token={token}
              setModal={setModal}
              type={"checked"}
            />
          );
        })}
      </div>

      <div className={styles.line} />

      <div className={styles.finished}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>종료된 강의의 멘티</h1>
        </div>
        <EmptyDataNotice data={closedMentee} content={"멘티"} />
        {closedMentee?.map((data, i) => {
          return (
            <DecideOpenOrClose
              key={i}
              data={data}
              token={token}
              setModal={setModal}
              type={"checked"}
            />
          );
        })}
      </div>

      <BottomTab num={[0, 0, 0, 1]} role={"ROLE_MENTOR"} />
    </section>
  );
};

export default MenteeList;
