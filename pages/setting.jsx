import styles from "./setting.module.scss";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import { BlueBtn } from "../components/mypage/myPageBtn";
import ToggleSwitch from "../components/mypage/toggleSwitch";
const AlarmSelect = ({ title, content }) => {
  return (
    <section className={styles.alarmSelect}>
      <h1 className={styles.blackTitle}>{title}</h1>
      <span className={styles.greyContent}>{content}</span>
    </section>
  );
};

const Setting = () => {
  return (
    <section className={styles.settingSection}>
      <OtherTopBar title={"설정"} url={"/mypage"} />
      <section className={styles.selectSection}>
        <h1 className={styles.blueTitle}>푸시 알림</h1>
        <div className={styles.blueLine} />
        <div className={styles.switchSection}>
          <AlarmSelect
            title={"채팅 알림"}
            content={"튜터를 포함한 타인에게 메세지가 도착하면 알려드립니다."}
          />
          <ToggleSwitch />
        </div>
        <div className={styles.greyLine} />
        <div className={styles.switchSection}>
          <AlarmSelect
            title={"댓글 알림"}
            content={
              "자유게시판에 작성한 글에 새 댓글이 등록되면 알려드립니다."
            }
          />
          <ToggleSwitch />
        </div>
        <div className={styles.greyLine} />
      </section>
      <div className={styles.fixed}>
        <BlueBtn text={"저장"} />
      </div>
    </section>
  );
};
export default Setting;
