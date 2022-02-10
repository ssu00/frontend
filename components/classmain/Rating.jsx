import style from "./rating.module.scss";
const Rating = ({ rating }) => {
  return (
    <section className={style.starSection}>
      <div className={style.graystar}>
        <div
          className={style.bluestar}
          style={{ width: rating * 20 + "%" }}
        ></div>
      </div>
    </section>
  );
};

export default Rating;
