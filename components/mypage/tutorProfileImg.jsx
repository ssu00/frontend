import styles from "./tutorProfileImg.module.scss";
import Image from "next/image";

const TutorProfileImg = ({ img }) => {
  return img === null ? (
    <section className={styles.tutorProfileImg}>
      <div className={styles.logo} />
    </section>
  ) : (
    <Image src={img || "/images/mypage/imgLogo.svg"} width={86} height={113} />
  );
};
export default TutorProfileImg;
