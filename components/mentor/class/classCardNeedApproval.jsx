import styles from "./classCard.module.scss";
const ClassCardNeedApproval = () => {
  return (
    <section className={styles.classCard}>
      <div className={styles.classCardImage}>
        <Image
          src={"/example.png"}
          width="330px"
          height="136px"
          alt=""
          className={styles.classCardImg}
        />

        {/* <div className={styles.onoffMethod}>
      {offline ? (
        <strong className={styles.onoff} aria-label="오프라인으로 진행">
          오프라인
        </strong>
      ) : (
        <></>
      )}
      {online ? (
        <strong className={styles.onoff} aria-label="온라인으로 진행">
          온라인
        </strong>
      ) : (
        <></>
      )}
    </div> */}
      </div>

      <div className={styles.classCardExplanation}>
        <strong className={styles.subject}>Python</strong>
        <div className={styles.secondLine}>
          <h1 className={styles.title}>
            {title.length >= 20 ? title.substring(0, 20) + "..." : title}
          </h1>
          <div className={styles.studentCnt}>
            <IC_Student_Black w={9.33} h={13} />
            <span className={styles.cnt}>32</span>
          </div>
        </div>

        <span className={styles.subtitle}>{"테스트용 subtitle입니다."} </span>

        {/* <div className={styles.likes}>
      <span className={styles.heart} />
    </div> */}
        {/* <IC_Heart_Empty w={20} h={20} />
      <IC_Location_Gray w={12} h={12} /> */}
        <strong className={styles.name}>멘토 김하나</strong>
      </div>
    </section>
  );
};

export default ClassCardNeedApproval;
