import styles from "./menteeReview.module.scss";
import { MenuBtn, TopBar, BottomTab } from "../../../../components/common";
import { useState } from "react";
import * as cookie from "cookie";
import { IC_Caution } from "../../../../icons";
import { getUnreviewedMentee } from "../../../../core/api/Mentee/getUnreviewedMentee";
import { getMyReviewsMentt } from "../../../../core/api/Mentee/getMyReviewsMentt";
import { useEffect } from "react";
import BasicBtn from "../../../../components/common/button/basicBtn";
import { basicBtnStyle } from "../../../../components/common";
import classNames from "classnames";
import btn from "../../../../pages/start.module.scss";

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const unreviewedMentee = await getUnreviewedMentee(token);
  const myReviewsMentt = await getMyReviewsMentt(token);

  return {
    props: { unreviewedMentee, myReviewsMentt },
  };
}

const writeMenteeReview = ({ unreviewedMentee, myReviewsMentt }) => {
  const tabMenu = ["후기작성", "후기내역"];
  const [tabCurrent, setTabCurrent] = useState(0);
  const [unWrite, setUnWrite] = useState([]);
  const [reviews, setReviews] = useState([]);

  const onClick = (idx) => {
    setTabCurrent(idx);
  };

  useEffect(() => {
    setUnWrite(unreviewedMentee);
    setReviews(myReviewsMentt);
  }, []);

  console.log(myReviewsMentt, "myReviewsMentt");

  const NoWriteReviews = () => {
    return (
      <section className={styles.noReviews}>
        <IC_Caution />
        <p className={styles.subNotification}>작성한 후기가 없습니다.</p>
      </section>
    );
  };

  const NoReviews = () => {
    return (
      <section className={styles.noReviews}>
        <IC_Caution />
        <p className={styles.subNotification}>작성 가능한 후기가 없습니다.</p>
      </section>
    );
  };

  const AllReview = () => {
    return (
      <section>
        {unWrite.content?.map((unreview) => {
          const lectureDate = unreview.createdAt.slice(0, 10);
          const dateDot = lectureDate.split("-").join(".");
          return (
            <article key={unreview.lecture.id}>
              <p>{dateDot}</p>
              <hr />
              <div className={styles.allReview}>
                <img
                  className={styles.allReviewImg}
                  src={"/samples/lecture2.jpg"}
                />
                {/* <img
                src={unreview.lecture.thumbnail}
                alt={unreview.lecture.lectureTitle}
              /> */}
                <div className={styles.allReviewCnt}>
                  <p>{unreview.lectureTitle}</p>
                  <p className={styles.allReviewInfoText}>
                    {unreview.lecture.systems?.map((type, i) => (
                      <span key={i}>{type.name} </span>
                    ))}
                    {unreview.lecture.lecturePrices?.map((group, i) => (
                      <span key={i}>{group.isGroup ? ` / 그룹` : null}</span>
                    ))}
                  </p>
                </div>
                <BasicBtn
                  text={"후기작성"}
                  btnStyle={classNames(
                    btn.loginBtn,
                    basicBtnStyle.btn_white,
                    styles.btnRadius
                  )}
                  textStyle={btn.loginBtnText}
                />
              </div>
            </article>
          );
        })}
      </section>
    );
  };

  return (
    <>
      <section className={styles.topSection}>
        <TopBar text={"강의 후기"} />
        <div className={styles.category}>
          {tabMenu.map((tab, i) => (
            <MenuBtn
              text={tab}
              key={i}
              selected={tabCurrent === i ? true : false}
              onClick={() => {
                onClick(i);
              }}
            />
          ))}
        </div>
      </section>
      <section className={styles.contentSection}>
        {tabCurrent === 0 ? (
          unWrite.content?.length !== 0 ? (
            <AllReview />
          ) : (
            <NoReviews />
          )
        ) : (
          <>후기내역</>
        )}
      </section>
      <BottomTab num={[0, 0, 0, 1]} />
    </>
  );
};

export default writeMenteeReview;
