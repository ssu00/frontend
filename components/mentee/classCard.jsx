import styles from "./classCard.module.scss";
import Image from "next/image";
import classNames from "classnames";

const ClassCard = ({ classDetail }) => {
  const { title, explanation } = classDetail;
  const labels = ["초급", "그룹"];
  const tags = ["ONLINE", "NEW"];

  return (
    <a
      href="#"
      className={styles.classCard}
      aria-label={`${title} 상세 정보 보기`}
    >
      <section>
        <div className={styles.imageContainer}>
          <Image
            layout="fill"
            objectFit="cover"
            src="/samples/lecture.png"
            alt={title}
          />
          <div className={styles.labels}>
            {labels.map((label, index) => (
              <div className={styles.label} key={index}>
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.informationBox}>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <div className={classNames(styles.tag)} key={index}>
                {tag}
              </div>
            ))}
          </div>
          <h2>{title}</h2>
          <h3>{explanation}</h3>
          <p className={styles.tutorName}>튜터 김하나</p>
        </div>
      </section>
    </a>
  );
};

export default ClassCard;
