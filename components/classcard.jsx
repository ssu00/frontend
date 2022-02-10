import Image from "next/image";
import styles from "./classcard.module.scss";
import router from "next/router";
const ClassCard = ({ data }) => {
  let online = false;
  let offline = false;
  if (
    data.systemTypes[0]?.type == "ONLINE" ||
    data.systemTypes[1]?.type == "ONLINE"
  ) {
    online = true;
  }
  if (
    data.systemTypes[0]?.type == "OFFLINE" ||
    data.systemTypes[1]?.type == "OFFLINE"
  ) {
    offline = true;
  }
  return (
    <div
      className={styles.classCard}
      onClick={() => router.push(`/classDetail/${data.id}`)}
    >
      <div className={styles.classCardImage}>
        <Image
          src={data.thumbnail ? data.thumbnail : ""}
          width="330px"
          height="136px"
          alt=""
          className={styles.classCardImg}
        />
        <div className={styles.onoffMethod}>
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
        </div>
      </div>{" "}
      <div className={styles.classCardExplanation}>
        <h1>
          {data.title.length >= 25
            ? data.title.substring(0, 25) + "..."
            : data.title}
        </h1>
        <span className={styles.def}>{data.subTitle} </span>
        <div className={styles.likes}>
          <span className={styles.heart} />
          <span className={styles.likeCnt}>{data.likes}</span>
          {/*추가 필요 */}
        </div>
        {/* <span className={styles.tag}>{data.tag}</span> */}
      </div>
    </div>
  );
};

export default ClassCard;
