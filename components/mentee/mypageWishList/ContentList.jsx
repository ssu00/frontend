import React from "react";
import Image from "next/image";
import styles from "./ContentList.module.scss";
import { IC_HeartRedFill, IC_Star } from "../../../icons";
import { useRouter } from "next/router";
function ContentList({ wish }) {
  console.log(wish);
  const { lecture } = wish;
  const router = useRouter();
  return (
    <section
      className={styles.container}
      onClick={() =>
        router.push({
          pathname: `/mentee/classdetails/${lecture.id}`,
          query: {
            lecturePriceId: lecture.lecturePrice.lecturePriceId,
          },
        })
      }
    >
      <article>
        <div className={styles.image_box}>
          <Image
            src={wish.thumbnail ? wish.thumbnail : "/samples/lecture.png"}
            width={"160px"}
            height={"140px"}
            layout="fill"
          />
          <div className={styles.category_box}>
            <span>그룹</span>
            <span>초급</span>
          </div>
        </div>
        <div className={styles.content_box}>
          <button className={styles.online}>{lecture.systems[0].type}</button>
          <span className={styles.title}>{lecture.title}</span>
          <span
            className={styles.mentor}
          >{`멘토 ${lecture.mentorNickname}`}</span>
          <div className={styles.review}>
            <IC_HeartRedFill width={"16px"} height={"16px"} />
            {/* <span>{lecture}</span> */}
            <div className={styles.bar}></div>
            <IC_Star width={"11px"} height={"11px"} />
            <span>5.0</span>
          </div>
          <div className={styles.price_box}>
            <span className={styles.price}>
              {lecture.lecturePrice.totalPrice.toLocaleString()}
            </span>
            원
          </div>
        </div>
      </article>
    </section>
  );
}

export default ContentList;
