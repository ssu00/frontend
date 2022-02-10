import styles from "./tutorProfileImg.module.scss";
import Image from "next/image";

const TutorProfileImg = ({ img }) => {
  return img == "" ? (
    <section className={styles.tutorProfileImg}>
      <div className={styles.logo} />
    </section>
  ) : (
    <Image src={img} width="86px" height="113px" />
  );
};
export default TutorProfileImg;
