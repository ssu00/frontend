import React, { useEffect } from "react";
import styles from "./Rating.module.scss";
import Image from "next/image";

function Rating() {
  const clicked = (e) => {
    e.preventDefault();
    const array = Array.from(e.currentTarget.parentNode.children);
    const index = array.indexOf(e.currentTarget);
    array.forEach((item) => {
      item.style.background = `url("/images/star_btn_off.svg") no-repeat center/cover`;
    });

    for (let i = 0; i <= index; i++) {
      array[
        i
      ].style.background = `url("/images/star_btn_on.svg") no-repeat center/cover`;
    }
  };
  return (
    <div className={styles.container}>
      <h5>강의는 만족하셨나요?</h5>
      <div className={styles.star_box}>
        <button onClick={clicked}></button>
        <button onClick={clicked}></button>
        <button onClick={clicked}></button>
        <button onClick={clicked}></button>
        <button onClick={clicked}></button>
      </div>
    </div>
  );
}

export default Rating;
