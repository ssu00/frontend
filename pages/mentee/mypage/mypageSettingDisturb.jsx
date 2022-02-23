import React from "react";
import styles from "./template.module.scss";
import TopBar from "../../../components/mentee/TopBar";
import Push from "../../../components/mentee/mypageSetting/Push";
import Bottom from "../../../components/mentee/mypageLectureRequest/Bottom";
import HomeIndicator from "../../../components/mentee/HomeIndicator";
import DisturbOn from "../../../components/mentee/mypageSettingDisturb/DisturbOn";
function mypageSettingDisturb() {
  return (
    <main className={styles.main}>
      <TopBar title="설정" />
      <Push />
      <DisturbOn />
      <Bottom title="저장" />
      <HomeIndicator />
    </main>
  );
}

export default mypageSettingDisturb;
