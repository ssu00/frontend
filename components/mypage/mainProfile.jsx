import styles from "./mainProfile.module.scss";
import router from "next/router";
import Image from "next/image";
const MainProfile = ({ name, img }) => {
  return (
    <section className={styles.mainPageProfile}>
      {img ? (
        <Image
          src={img}
          width="56px"
          height="56px"
          className={styles.profileImage}
        />
      ) : (
        <div className={styles.profileImage} />
      )}
      <div className={styles.profileInfo}>
        <span className={styles.profile}>튜터</span>
        <h1 className={styles.name}>{name}</h1>
      </div>
      <button
        type="button"
        className={styles.profileEditBtn}
        onClick={() => router.push("/profileEdit")}
      >
        <span className={styles.btnText}>프로필 수정</span>
      </button>
    </section>
  );
};
export default MainProfile;
