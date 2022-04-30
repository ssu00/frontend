import React, { useState, useEffect, useCallback } from "react";
import styles from "./MentorReview.module.scss";
import { getOneMentorLecture } from "../../../core/api/Mentor/getOneMentorLecture";
import { Rating } from "../../../components/mentor/class/rating";

const MentorReview = ({ params, token }) => {
  const [page, setPage] = useState(1);
  const [reviewInfo, setReviewInfo] = useState([]);

  const oneMentorLecture = useCallback(async () => {
    const review = await getOneMentorLecture(token, params, page);
    setReviewInfo(review);
  });

  useEffect(() => {
    oneMentorLecture();
  }, []);

  console.log(reviewInfo);
  return (
    <section>
      <article className={styles.ratingSection}>
        <h2>튜터 평점</h2>
        <div className={styles.rating}>
          <Rating
            w={"17.25px"}
            h={"17.25px"}
            otherStyle={styles.score}
            fillRating={reviewInfo.scoreAverage}
          />
          <span> {reviewInfo.scoreAverage} / 5</span>
        </div>
      </article>
    </section>
  );
};

export default MentorReview;
