import Discount from "./Discount";
import style from "./introSection.module.scss";
import Rating from "./Rating";

const IntroSection = ({
  tutorname,
  title,
  rating,
  reviewCnt,
  subheading,
  originPrice,
  originPrice2,
  group,
  group2,
  discount,
  finalPrice,
  finalPrice2,
  setReview,
  notes, //특이사항 (ex) 쿠폰 적용시 5개월 할부
}) => {
  return (
    <section className={style.IntroductionSection}>
      <span className={style.tutor}>
        튜터&nbsp;<strong>{tutorname}</strong>
      </span>
      <h1 className={style.title}>{title}</h1>

      <span className={style.rateReviews}>
        <span className={style.stars}>
          <Rating rating={rating}></Rating>
        </span>
        <span className={style.rates}>{rating}</span>
        <button
          type="button"
          className={style.reviewBtn}
          onClick={() => setReview(false)}
        >
          <span className={style.gotoReview}> 리뷰보기&nbsp;</span>
          <span className={style.reviewcount}>({reviewCnt})</span>
        </button>
      </span>

      <h3 className={style.subheading}>{subheading}</h3>
      <Discount
        originPrice={originPrice}
        discount={discount}
        finalPrice={finalPrice}
        notes={notes}
        group={group}
      ></Discount>
      {originPrice2 ? (
        <Discount
          originPrice={originPrice2}
          discount={discount}
          finalPrice={finalPrice2}
          notes={notes}
          group={group2}
        ></Discount>
      ) : (
        <></>
      )}
    </section>
  );
};
export default IntroSection;
