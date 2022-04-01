import styles from "./classCard.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { IC_HeartFill } from "../../icons";
import Rating from "@mui/material/Rating";
import { useRouter } from "next/router";
import { transLevel } from "../mentor/class/classCard";

const ClassCard = ({ classDetail }) => {
  const { title, explanation, lectureMentor, lecturePrices } = classDetail;
  const router = useRouter();
  const labels = ["초급", "그룹"];
  const tags = ["ONLINE", "NEW"];

  return (
    <div className={styles.classCard} aria-label={`${title} 상세 정보 보기`}>
      <section
        onClick={() => router.push(`/mentee/classdetails/${classDetail.id}`)}
      >
        <div className={styles.imageContainer}>
          <Image
            layout="fill"
            objectFit="cover"
            src="/samples/lecture.png"
            alt={title}
          />
          <div className={styles.labels}>
            <div className={styles.label}>{transLevel(classDetail)}</div>
          </div>
        </div>
        <div className={styles.informationBox}>
          <div className={styles.tags}>
            <div className={classNames(styles.tag)}>
              {classDetail?.systems[0]?.type}
            </div>
          </div>
          <h2>{title}</h2>
          <h3>{explanation}</h3>
          <p className={styles.tutorName}>{`튜터 ${lectureMentor.nickname}`}</p>

          <div className={styles.rating}>
            <IC_HeartFill
              width="12px"
              height="9px"
              fill="currentColor"
              color="red"
            />
            <span>56</span>
            <img
              src={"/images/menteeall/height-bar.svg"}
              width="1"
              height="8"
              className={styles.height_bar}
            />

            <Rating
              className={styles.stars}
              name="simple-controlled"
              value={classDetail.scoreAverage}
              precision={0.5}
            />

            <span
              className={styles.review_num}
            >{`${classDetail.reviewCount}개 후기`}</span>
          </div>

          <div className={styles.price_box}>
            <span className={styles.sale}>20%</span>
            <span className={styles.price}>197,000</span>
            <span className={styles.won}>원</span>
            <span className={styles.month}>/1개월 기준</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassCard;
