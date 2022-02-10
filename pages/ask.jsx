import styles from "./ask.module.scss";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import { BlueBtn } from "../components/mypage/myPageBtn";
const Ask = () => {
  return (
    <section className={styles.askSection}>
      <OtherTopBar title={"문의하기"} url={"/mypage"} />
      <p className={styles.text}>
        튜터랩을 이용하면서 생긴 불편사항이나 개선사항을 알려주세요. 전달해주신
        소중한 의견으로 더 나은 튜터랩이 되도록 노력하겠습니다.
      </p>
      <div className={styles.line} />
      <div className={styles.inputArea}>
        <select
          className={styles.askType}
          placeholder={"문의 유형을 선택해주세요."}
        >
          <option value="오류 문의" className={styles.askOption}>
            오류 문의
          </option>
          <option value="튜터 문의" className={styles.askOption}>
            튜터 문의
          </option>
          <option value="튜티 문의" className={styles.askOption}>
            튜티 문의
          </option>
          <option value="강의 문의" className={styles.askOption}>
            강의 문의
          </option>
          <option value="기타" className={styles.askOption}>
            기타
          </option>
        </select>
        <input
          type="text"
          className={styles.title}
          placeholder={"제목을 입력해주세요. (20자 이내)"}
        />
        <textarea
          type="text"
          className={styles.content}
          placeholder={"의견을 입력해주세요. \n(최소 10자, 최대 1500자)"}
        />
      </div>
      <div className={styles.imageArea}>
        <div className={styles.fileInput}>
          <input type="file" id="file1" />
          <label htmlFor="file1" className={styles.fileLabel} />
          <input type="file" id="file2" />
          <label htmlFor="file2" className={styles.fileLabel} />
          <input type="file" id="file3" />
          <label htmlFor="file3" className={styles.fileLabel} />
          <input type="file" id="file4" />
          <label htmlFor="file4" className={styles.fileLabel} />
        </div>
        <p className={styles.text}>
          * 문의 답변은 회원가입 시 입력해주신 이메일을 통해 보내드리며, 순차적
          답변으로 다소 시일이 소요될 수 있음을 안내드립니다.
        </p>
      </div>
      <div className={styles.fixed}>
        <BlueBtn text={"문의"} />
      </div>
    </section>
  );
};

export default Ask;
