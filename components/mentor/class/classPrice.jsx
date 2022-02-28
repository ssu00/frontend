import { useEffect, useState } from "react";
import InputBoxWithUnit from "../../common/inputBox/inputBoxWithUnit";
import styles from "./classPrice.module.scss";
const ClassPrice = ({ form, handleChange, classType }) => {
  const [total, setTotal] = useState("");
  const CalculateTotal = () => {
    if (classType == "personal") {
      setTotal(form.PpricePerHour * form.PtimePerClass * form.PnumOfClass);
    } else if (classType == "group") {
      setTotal(form.GpricePerHour * form.GtimePerClass * form.GnumOfClass);
    }
  };

  useEffect(() => {
    CalculateTotal();
  }, [
    form.PpricePerHour,
    form.PtimePerClass,
    form.PnumOfClass,
    form.GpricePerHour,
    form.GtimePerClass,
    form.GnumOfClass,
  ]);

  return (
    <section className={styles.classPriceSection}>
      <div className={styles.alignWithRow}>
        <div className={styles.alignWithColumn}>
          <span className={styles.title}>시간 당 가격</span>
          <InputBoxWithUnit
            type={"number"}
            unit={"원"}
            placeholder={"00,000"}
            onChange={
              classType == "personal"
                ? handleChange("PpricePerHour")
                : handleChange("GpricePerHour")
            }
            value={
              classType == "personal" ? form.PpricePerHour : form.GpricePerHour
            }
          />
        </div>
        <div className={styles.multiple} />
        <div className={styles.alignWithColumn}>
          <span className={styles.title}>1회 당 강의시간</span>
          <InputBoxWithUnit
            type={"number"}
            unit={"시간"}
            placeholder={"0"}
            onChange={
              classType == "personal"
                ? handleChange("PtimePerClass")
                : handleChange("GtimePerClass")
            }
            value={
              classType == "personal" ? form.PtimePerClass : form.GtimePerClass
            }
          />
        </div>
        <div className={styles.multiple} />
        <div className={styles.alignWithColumn}>
          <span className={styles.title}>총 강의 횟수</span>
          <InputBoxWithUnit
            type={"number"}
            unit={"회"}
            placeholder={"0"}
            onChange={
              classType == "personal"
                ? handleChange("PnumOfClass")
                : handleChange("GnumOfClass")
            }
            value={
              classType == "personal" ? form.PnumOfClass : form.GnumOfClass
            }
          />
        </div>
      </div>

      <div className={styles.alignWithRow}>
        <div className={styles.equal} />
        <div className={styles.total_price_block}>
          <span className={styles.text_black}>최종 수강료</span>
          <strong className={styles.total_price}>
            {total.toLocaleString("ko-KR")}
          </strong>
          <span className={styles.text_black}>원</span>
        </div>
      </div>
    </section>
  );
};

export default ClassPrice;
