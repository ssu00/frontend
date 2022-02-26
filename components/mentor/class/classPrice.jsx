import InputBoxWithUnit from "../../common/inputBox/inputBoxWithUnit";
import styles from "./classPrice.module.scss";
const ClassPrice = () => {
  return (
    <section className={styles.classPriceSection}>
      <div className={styles.alignWithRow}>
        <div className={styles.alignWithColumn}>
          <span className={styles.title}>시간 당 가격</span>
          <InputBoxWithUnit type={"text"} unit={"원"} placeholder={"00,000"} />
        </div>
        <div className={styles.alignWithColumn}>
          <span className={styles.title}>1회 당 강의시간</span>
          <InputBoxWithUnit type={"text"} unit={"시간"} placeholder={"00"} />
        </div>
        <div className={styles.alignWithColumn}>
          <span className={styles.title}>총 강의 횟수</span>
          <InputBoxWithUnit type={"text"} unit={"회"} placeholder={"00"} />
        </div>
      </div>

      <div className={styles.total_price_block}>
        <span className={styles.text_black}>최종 수강료</span>
        <strong className={styles.total_price}>1000000</strong>
        <span className={styles.text_black}>원</span>
      </div>
    </section>
  );
};

export default ClassPrice;
