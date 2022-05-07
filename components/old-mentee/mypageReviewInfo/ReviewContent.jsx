import React, { useState } from "react";
import styles from "./ReviewContent.module.scss";
import Image from "next/image";
import OptionModal from "../../mentee/menteeModal/OptionModal";
import router from "next/router";

function ReviewContent() {
  const [Modal, setModal] = useState(false);
  const modalHandler = (e) => {
    e.preventDefault();
    setModal(!Modal);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.lecture_box}>
          <div className={styles.image_wrapper}>
            <Image
              src={"/images/review_image.png"}
              width={"50px"}
              height={"50px"}
            />
          </div>
          <div
            className={styles.title_box}
            onClick={() => {
              router.push("./mypageReviewDetail");
            }}
          >
            <h6>[SQR, R, Python]</h6>
            <h6>금융권 취업을 위한 데이터 분석 및모델링</h6>
            <span>온라인 / 그룹</span>
          </div>
          <button className={styles.option_icon} onClick={modalHandler}>
            <Image
              src={"/images/option_icon.svg"}
              width={"24px"}
              height={"24px"}
            />
          </button>
        </div>
        <div className={styles.review_box}>
          <div className={styles.star_box}>
            <Image src={"/images/star.svg"} width={"11px"} height={"11px"} />
            <Image src={"/images/star.svg"} width={"11px"} height={"11px"} />
            <Image src={"/images/star.svg"} width={"11px"} height={"11px"} />
            <Image src={"/images/star.svg"} width={"11px"} height={"11px"} />
            <Image
              src={"/images/half_star.svg"}
              width={"11px"}
              height={"11px"}
            />

            <span>2021.07.01</span>
          </div>

          <h6>
            질문이 많았는데도 친절하게 잘 설명해주시고, 초보자인 저도 커리...
          </h6>
        </div>
        {Modal && <OptionModal modalHandler={modalHandler} />}
      </div>
    </>
  );
}

export default ReviewContent;
