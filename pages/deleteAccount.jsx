import styles from "./deleteAccount.module.scss";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import { BlueBtn } from "../components/mypage/myPageBtn";
const Radio = ({ reason }) => {
  return (
    <label htmlFor={reason}>
      <section className={styles.radio}>
        <input
          type="radio"
          name="signOut"
          value={reason}
          className={styles.btn}
          id={reason}
        />
        <span className={styles.reason}>{reason}</span>
      </section>
    </label>
  );
};

const DeleteAccount = () => {
  return (
    <section className={styles.deleteAccount}>
      <OtherTopBar title={"회원 탈퇴"} />
      <section className={styles.textSection}>
        <strong className={styles.caution}>
          탈퇴 시 현재 구매한 강의 및 관심 강의 목록이 모두 사라집니다. 탈퇴 후
          환불은 불가하니 확인바랍니다.
        </strong>
        <span className={styles.text}>
          탈퇴 시 작성한 리뷰 및 게시물은 자동 삭제되지 않으며, 추후 수정/삭제가
          불가하니 탈퇴 전 확인바랍니다.
        </span>
        <span className={styles.text}>
          탈퇴사유를 선택해주시면, 앱 개선에 중요 자료로 활용 하겠습니다.
          감사합니다.
        </span>
      </section>
      <div className={styles.line} />

      <section className={styles.radioSection}>
        <Radio reason={"마음에 드는 강의가 없어서"} />
        <Radio reason={"이용이 불편하고 오류가 많아서"} />
        <Radio reason={"강의 이용료가 부담되서"} />
        <Radio reason={"활용도가 낮아서"} />
        <Radio reason={"다른 어플이 더 좋아서"} />
        <Radio reason={"기타"} />
      </section>

      <div className={styles.line} />

      <section className={styles.checkPW}>
        <span className={styles.text}>비밀번호</span>
        <input type="password" className={styles.pwBox} />
        <div className={styles.checkBox}>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className={styles.checkText}>
            <span>주의사항을 모두 확인하였으며, 동의합니다</span>
          </label>
        </div>
      </section>

      <div className={styles.fixed}>
        <BlueBtn text={"탈퇴"} />
      </div>
    </section>
  );
};

export default DeleteAccount;
