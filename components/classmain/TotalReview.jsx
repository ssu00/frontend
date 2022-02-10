import style from "./totalReview.module.scss";
import Rating from "./Rating";

const TotalReview = ({ totalRating, reviewCnt }) => {
  return (
    <section className={style.totalReview}>
      <strong className={style.rating}>{totalRating}</strong>
      <span className={style.reviewInfo}>
        <span className={style.reviewCnt}>{reviewCnt}개의 리뷰</span>
        <Rating className={style.stars} rating={totalRating}></Rating>
      </span>
    </section>
  );
};

export default TotalReview;
