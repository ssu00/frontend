import styles from "./steps.module.scss";
import { MenuBtn } from "../../common";
import TopBar from "../../common/tab/topBar";
import BottomBlueBtn from "../../common/button/bottomBlueBtn";
import EllipseBtn from "../../common/button/ellipseBtn";
import ClassPrice from "./classPrice";

const Step03 = ({ form, prevStep, handleChange, handleSubmit, MoveStep }) => {
  return (
    <div className={styles.step}>
      <TopBar text={"강의 등록"} onClick={prevStep} />
      <div className={styles.category}>
        <MenuBtn selected={false} text={"1단계"} onClick={() => MoveStep(1)} />
        <MenuBtn selected={false} text={"2단계"} onClick={() => MoveStep(2)} />
        <MenuBtn selected={true} text={"3단계"} onClick={() => MoveStep(3)} />
      </div>

      <section className={styles.contentSection}>
        <div className={styles.questionBlock}>
          <h3 className={styles.question}>
            1. '강의 방식1'을 선택해주세요. &nbsp;
            <span className={styles.caution}>* 중복 선택 가능 </span>
          </h3>
          <div className={styles.classType}>
            <EllipseBtn
              element={"온라인"}
              id={"online"}
              select={form.online}
              onClick={handleChange("online")}
            />
            <EllipseBtn
              element={"오프라인"}
              id={"offline"}
              select={form.offline}
              onClick={handleChange("offline")}
            />
            <EllipseBtn
              element={"장소 협의 가능"}
              id={"discuss"}
              select={form.discuss}
              onClick={handleChange("discuss")}
            />
          </div>
        </div>

        <div className={styles.questionBlock}>
          <h3 className={styles.question}>
            2. '강의 방식2'를 선택해주세요. &nbsp;
            <span className={styles.caution}>* 중복 선택 가능 </span>
          </h3>
          <div>
            <EllipseBtn
              element={"1:1 수업"}
              id={"personal"}
              select={form.personal}
              onClick={handleChange("personal")}
            />
            <div className={styles.group}>
              <EllipseBtn
                element={"그룹 수업"}
                id={"group"}
                select={form.group}
                onClick={handleChange("group")}
              />
              {form.group == "on" ? (
                <div className={styles.groupMax}>
                  <input
                    type="number"
                    onChange={handleChange("groupMax")}
                    className={styles.maxInput}
                    value={form.groupMax}
                  />
                  <span className={styles.text_max}>최대</span>
                  <span className={styles.text_cnt}>명</span>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        {form.personal == "on" && (
          <div className={styles.questionBlock}>
            <h3 className={styles.question}>
              3. 1:1 수업의 강의 가격을 입력해주세요.
              <br />
              <span className={styles.caution}>
                * 무료 강의인 경우 <strong>시간 당 가격</strong>을
                <strong> 0원</strong>으로 설정해주세요.
              </span>
            </h3>
            <ClassPrice
              form={form}
              handleChange={handleChange}
              classType={"personal"}
            />
          </div>
        )}

        {form.group == "on" && (
          <div className={styles.questionBlock}>
            <h3 className={styles.question}>
              {form.personal == "on" ? <span>4</span> : <span>3</span>}. 그룹
              수업의 강의 가격을 입력해주세요.
              <br />
              <span className={styles.caution}>
                * 무료 강의인 경우 <strong>시간 당 가격</strong>을
                <strong> 0원</strong>으로 설정해주세요.
              </span>
            </h3>
            <ClassPrice
              form={form}
              handleChange={handleChange}
              classType={"group"}
            />
          </div>
        )}
      </section>

      <BottomBlueBtn text={"강의 업로드"} onClick={handleSubmit} />
    </div>
  );
};
export default Step03;
