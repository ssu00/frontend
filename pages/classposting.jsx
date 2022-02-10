import Image from "next/image";
import router from "next/router";
import styles from "../styles/classposting.module.scss";
import ClassCardForPosting from "../components/classCardForPosting";
import BottomTab from "../components/bottomtab";
import fakeData from "../data.json";

const ClassPosting = ({}) => {
  return (
    <>
      <div className={styles.whitesection}>
        <h1 className={styles.title}>튜터</h1>
        <div className={styles.category}>
          <button
            type="button"
            className={styles.unselected}
            onClick={() => router.push("/myclass")}
          >
            내 강의
          </button>
          <button
            type="button"
            className={styles.selected}
            onClick={() => router.push("/classposting")}
          >
            강의 등록
          </button>
        </div>{" "}
      </div>

      <div className={styles.graysection}>
        <div>
          <h3 className={styles.smallheadingB}>새로운 강의 등록하기</h3>
          <button
            type="button"
            className={styles.add}
            onClick={() => router.push("/classRegistration")}
          >
            <p>
              강의를 등록하고
              <br /> 더 많은 튜티들을 만나보세요!
            </p>
            <div className={styles.pluspic}>+</div>
          </button>
        </div>

        <div>
          <h3 className={styles.smallheadingM}>
            심사 중인 강의 {fakeData.testingcnt}개(최대 24시간 소요)
          </h3>
          {fakeData.classes.map((data, i) => {
            return data.testing ? (
              <ClassCardForPosting data={data} key={i} />
            ) : (
              <></>
            );
          })}
        </div>
        <div className={styles.fixedTab}>
          <BottomTab num={1} />
        </div>
      </div>
    </>
  );
};

export default ClassPosting;
