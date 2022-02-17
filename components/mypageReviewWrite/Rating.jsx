import React from "react";
import styles from "./Rating.module.scss";
import Image from "next/image";
import StarBtn from "../StarBtn";

function Rating() {
  return (
    <div className={styles.container}>
      <h5>강의는 만족하셨나요?</h5>
      <div className={styles.star_box}>
        <StarBtn />
        <StarBtn />
        <StarBtn />
        <StarBtn />
        <StarBtn />
      </div>
    </div>
  );
}

export default Rating;
