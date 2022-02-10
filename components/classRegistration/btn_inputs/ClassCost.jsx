import styles from "./selectButton.module.scss";
const ShortSquare = ({ definition, unit, placeholder, onChange, value }) => {
  return (
    <div className={styles.shortSquare}>
      <span className={styles.definition}>{definition}</span>
      <div className={styles.userInput}>
        <input
          type="number"
          className={styles.inputBox}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <span className={styles.unit}>{unit}</span>
      </div>
    </div>
  );
};

const LongSquare = ({ price }) => {
  return (
    <div className={styles.longSquare}>
      <div className={styles.price}>최종 수강료</div>
      <div className={styles.price}>{price.toLocaleString("ko-KR")}원</div>
    </div>
  );
};

const ClassCost = ({ form, handleChange, distinct }) => {
  return (
    <section className={styles.classCost}>
      <div className={styles.each}>
        <ShortSquare
          definition={"시간 당 가격"}
          unit={"원"}
          placeholder={"0"}
          onChange={
            distinct == "personal"
              ? handleChange("PpricePerHour")
              : handleChange("GpricePerHour")
          }
          value={
            distinct == "personal"
              ? form.PpricePerHour == 0
                ? ""
                : form.PpricePerHour
              : form.GpricePerHour == 0
              ? ""
              : form.GpricePerHour
          }
        />
        <span className={styles.mult}>X</span>
        <ShortSquare
          definition={"1회 당 강의 시간"}
          unit={"시간"}
          placeholder={"00"}
          onChange={
            distinct == "personal"
              ? handleChange("PtimePerClass")
              : handleChange("GtimePerClass")
          }
          value={
            distinct == "personal"
              ? form.PtimePerClass == 0
                ? ""
                : form.PtimePerClass
              : form.GtimePerClass == 0
              ? ""
              : form.GtimePerClass
          }
        />
        <span className={styles.mult}>X</span>
        <ShortSquare
          definition={"총 강의 횟수"}
          unit={"회"}
          placeholder={"00"}
          onChange={
            distinct == "personal"
              ? handleChange("PnumOfTimes")
              : handleChange("GnumOfTimes")
          }
          value={
            distinct == "personal"
              ? form.PnumOfTimes == 0
                ? ""
                : form.PnumOfTimes
              : form.GnumOfTimes == 0
              ? ""
              : form.GnumOfTimes
          }
        />
      </div>
      <div className={styles.total}>
        <span className={styles.equal}>=</span>
        <LongSquare
          price={
            distinct == "personal"
              ? (
                  form.PpricePerHour *
                  form.PtimePerClass *
                  form.PnumOfTimes
                ).toLocaleString("ko-KR")
              : (
                  form.GpricePerHour *
                  form.GtimePerClass *
                  form.GnumOfTimes
                ).toLocaleString("ko-KR")
          }
        />
      </div>
    </section>
  );
};
export default ClassCost;
