import { useState } from "react";
import * as cookie from "cookie";
import router from "next/router";
import { getUnreviewedMentee } from "../../../../core/api/Mentee/getUnreviewedMentee";
import { getReviewMentee } from "../../../../core/api/Mentee/getReviewMentee";
import styles from "./menteeReview.module.scss";
import { MenuBtn, TopBar, BottomTab } from "../../../../components/common";
import WriteMenteeReview from "./WriteMenteeReview";
import UnWriteMenteeReview from "./UnWriteMenteeReview";

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const unreviewedMentee = await getUnreviewedMentee(token);
  const menteeReviews = await getReviewMentee(token);

  return {
    props: { unreviewedMentee, menteeReviews, token },
  };
}

const mypageMenteeReview = ({ token, unreviewedMentee, menteeReviews }) => {
  const tabMenu = ["후기작성", "후기내역"];
  const [tabCurrent, setTabCurrent] = useState(0);

  const onClick = (idx) => {
    setTabCurrent(idx);
  };

  return (
    <>
      <section className={styles.contentSection}>
        <section className={styles.topSection}>
          <TopBar
            text={"강의 후기"}
            onClick={() => {
              router.back();
            }}
          />
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
        {tabCurrent === 0 ? (
          <UnWriteMenteeReview unreviewedMentee={unreviewedMentee} />
        ) : (
          <WriteMenteeReview menteeReviews={menteeReviews} token={token} />
        )}
        <BottomTab num={[0, 0, 0, 1]} role={"ROLE_MENTEE"} />
      </section>
    </>
  );
};

export default mypageMenteeReview;
