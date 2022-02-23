import React from "react";
import styles from "./WriteContent.module.scss";
import Image from "next/image";
import router from "next/router";

function WriteContent() {
  return (
    <section className={styles.container}>
      <ul>
        <li>
          <div className={styles.date}>2021.07.01</div>
          <div className={styles.content}>
            <div className={styles.image_wrapper}>
              <Image
                src={"/images/lecture_image.png"}
                width={"100%"}
                height={"100%"}
              />
            </div>

            <div className={styles.title_box}>
              <span>김하나</span>
              <h6>금융권 취업을 위한 데이터 분석 및 모델링 - SQL, R, Python</h6>
              <span>온라인/그룹</span>
            </div>
            <button
              onClick={() => {
                router.push("/mypageReviewWrite");
              }}
            >
              후기작성
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default WriteContent;
