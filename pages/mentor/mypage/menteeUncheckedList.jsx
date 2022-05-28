import { useState } from "react";
import * as cookie from "cookie";
import { BottomTab, TopBar } from "../../../components/common";
import styles from "./menteeList.module.scss";
import router from "next/router";
import { DecideOpenOrClose } from "../../../components/mentor/mypage/menteeListLine";
import { ModalWithBackground, BasicModal } from "../../../components/common";
import EmptyDataNotice from "../../../components/common/emptyDataNotice";
import { getUncheckedLecture } from "../../../core/api/Mentor/getMyMentees";

export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  let myMenteeUnchecked = await getUncheckedLecture(token);

  return {
    props: { token, myMenteeUnchecked },
  };
};

const MenteeUncheckedList = ({ token, myMenteeUnchecked }) => {
  const [uncheckedMentee, setUncheckedMentee] = useState(myMenteeUnchecked);
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
          <h1 className={styles.title}>강의 신청한 멘티</h1>
        </div>
        <EmptyDataNotice data={uncheckedMentee.content} content={"멘티"} />
        {uncheckedMentee?.content?.map((data, i) => {
          return (
            <DecideOpenOrClose
              key={i}
              data={data}
              token={token}
              setModal={setModal}
              type={"unchecked"}
            />
          );
        })}
      </div>

      <BottomTab num={[0, 0, 0, 1]} role={"ROLE_MENTOR"} />
    </section>
  );
};

export default MenteeUncheckedList;
