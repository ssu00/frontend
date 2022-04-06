import React from "react";
import { getUnreviewedMentee } from "../../../../../core/api/Mentee/getUnreviewedMentee";
import { getWriteReview } from "../../../../../core/api/Mentee/getWriteReview";
import * as cookie from "cookie";
import { useState } from "react";
import { useEffect } from "react";
import { BottomBlueBtn, TopBar } from "../../../../../components/common";
import styles from "./writeReview.module.scss";
import router from "next/router";
import { IC_Logo } from "../../../../../icons";

const WriteMentee = ({ unreviewedMentee }) => {
  const [reviewInfo, setReviewInfo] = useState([]);

  useEffect(() => {
    setReviewInfo(unreviewedMentee);
  }, []);

  const reviewInfoCon = unreviewedMentee.content;

  return (
    <>
      <section className={styles.topSection}>
        <TopBar
          text={"후기 작성"}
          onClick={() => {
            router.back();
          }}
        />

        <IC_Logo />
      </section>

      <section className={styles.contentSection}>
        <article className={styles.bg}>
          {reviewInfoCon?.map((review) => {
            return (
              <div className={styles.review} key={review.lecture.id}>
                <img
                  className={styles.reviewImg}
                  src={"/samples/lecture2.jpg"}
                />
                <div className={styles.reviewCon}>
                  <p>{review.lecture.title}</p>
                </div>
              </div>
            );
          })}
        </article>
      </section>

      <BottomBlueBtn text={"등록"} disabled />
    </>
  );
};

export default WriteMentee;
