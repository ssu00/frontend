import React from "react";
import Image from "next/image";
import styles from "./ContentList.module.scss";
import { IC_HeartRedFill, IC_Star } from "../../../icons";
function ContentList({ wish }) {
  console.log(wish);
  return (
    <section className={styles.container}>
      <article>
        <div className={styles.image_box}>
          <Image
            src={"/images/mypage_wishlist/article.png"}
            width={"160px"}
            height={"140px"}
          />
          <div className={styles.category_box}>
            <span>그룹</span>
            <span>초급</span>
          </div>
        </div>
        <div className={styles.content_box}>
          <button className={styles.online}>ONLINE</button>
          <span className={styles.title}>
            금융권 취업을 위한 데이터 분석 및 모델링 / SQL, R...
          </span>
          <span className={styles.mentor}>멘토 김하나</span>
          <div className={styles.review}>
            <IC_HeartRedFill width={"16px"} height={"16px"} />
            <span>56</span>
            <div className={styles.bar}></div>
            <IC_Star width={"11px"} height={"11px"} />
            <span>5.0</span>
          </div>
          <div className={styles.price_box}>
            <span className={styles.price}>197,000</span>원
          </div>
        </div>
      </article>
    </section>
  );
}

export default ContentList;
