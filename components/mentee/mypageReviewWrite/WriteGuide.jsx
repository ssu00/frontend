import React from "react";
import styles from "./WriteGuide.module.scss";

function WriteGuide() {
  return (
    <div className={styles.container}>
      <h6>후기 작성 안내</h6>
      <ul>
        <li>
          후기 내용은 20자 이상 작성합니다. 강의와 관련없는 내용, 이메일,
          휴대전화 번호 등의 개인정보/광고/비속어가 포함 된 후기는 블라인드 처리
          됩니다.
        </li>
        <li>
          최종 등록된 후기는 공개되어 튜터랩 사용자가 조회 가능하며, 댓글이
          등록될 수 있습니다.
        </li>
      </ul>
    </div>
  );
}

export default WriteGuide;
