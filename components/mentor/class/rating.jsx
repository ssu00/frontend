import styles from "./rating.module.scss";
const Rating = ({ w, h, fillRating, otherStyle }) => {
  return (
    <section className={otherStyle}>
      <div
        className={styles.ratingEmptySection}
        style={{ width: w, height: h }}
      >
        <div
          className={styles.ratingFullSection}
          style={{ width: fillRating * 20 + "%", height: h }}
        />
      </div>
    </section>
  );
};

const RatingBig = ({ w, h, fillRating }) => {
  return (
    <section>
      <div
        className={styles.ratingEmptySectionBig}
        style={{ width: w, height: h }}
      >
        <div
          className={styles.ratingFullSectionBig}
          style={{ width: fillRating * 20 + "%", height: h }}
        />
      </div>
    </section>
  );
};

export { RatingBig, Rating };
