import React from "react";
import styles from "../../template.module.scss";
import TopBar from "/components/TopBar";
import Push from "/components/mypageSetting/Push";
import Bottom from "/components/mypageLectureRequest/Bottom";
import HomeIndicator from "/components/HomeIndicator";
import DisturbOn from "/components/mypageSettingDisturb/DisturbOn";
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
