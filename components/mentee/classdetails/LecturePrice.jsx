import React from "react";
import styles from "./LecturePrice.module.scss";
import { IC_Coupon } from "../../../icons";
function LecturePrice() {
  return (
    <div className={styles.container}>
      <div className={styles.basic_price}>{/* <span>246,250</span>원 */}</div>
      <div className={styles.sale_box}>
        {/* <span className={styles.sale}>30%</span> */}
        <span className={styles.sale_price}>
          <span>197,000</span>원
        </span>
        <span className={styles.month}></span>
      </div>
    </div>
  );
}

export default LecturePrice;
