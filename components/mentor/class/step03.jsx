import styles from "./steps.module.scss";
import { MenuBtn } from "../../common";
import TopBar from "../../common/tab/topBar";
import BottomBlueBtn from "../../common/button/bottomBlueBtn";
import EllipseBtn from "../../common/button/ellipseBtn";
import InputBoxWithUnit from "../../common/inputBox/inputBoxWithUnit";
import ClassPrice from "./classPrice";

const Step03 = ({
  form,
  prevStep,
  handleChange,
  handleSubmit,
  MoveStep,
  num,
}) => {
  // const [able, setAble] = useState(false);
  // useEffect(() => {
  //   const test1 = form.online != "off" || form.offline != "off";
  //   let test2 = false;
  //   if (form.personal == "on" && form.group == "off") {
  //     test2 = form.PpricePerHour * form.PtimePerClass * form.PnumOfTimes != 0;
  //   } else if (form.personal == "off" && form.group == "on") {
  //     test2 =
  //       form.groupMax != 0 &&
  //       form.groupMax != "" &&
  //       form.GpricePerHour * form.GtimePerClass * form.GnumOfTimes != 0;
  //   } else if (form.personal == "on" && form.group == "on") {
  //     test2 =
  //       form.PpricePerHour * form.PtimePerClass * form.PnumOfTimes != 0 &&
  //       form.groupMax != 0 &&
  //       form.groupMax != "" &&
  //       form.GpricePerHour * form.GtimePerClass * form.GnumOfTimes != 0;
  //   }
  //   setAble(test1 && test2);
  // }, [form]);

  return (
    <div className={styles.step}>
      {/* <div className={styles.background} id="uploadBack">
        <div className={styles.uploadModal} id="uploadModal">
          <BlueModal />
        </div>
      </div>{" "}
      <WhiteSection
        step={3}
        onClick={prevStep}
        MoveStep={MoveStep}
        able={able}
        num={num}
      /> */}
      <TopBar text={"강의 등록"} />
      <div className={styles.category}>
        <MenuBtn
          selected={false}
          text={"1단계"}
          onClick={() => console.log("step01")}
        />
        <MenuBtn
          selected={false}
          text={"2단계"}
          onClick={() => console.log("step02")}
        />
        <MenuBtn
          selected={true}
          text={"3단계"}
          onClick={() => console.log("step03")}
        />
      </div>

      <section className={styles.contentSection}>
        <div className={styles.questionBlock}>
          <h3 className={styles.question}>
            1. '강의 방식1'을 선택해주세요. (중복 선택 가능)
          </h3>
          <div className={styles.classType}>
            <EllipseBtn element={"온라인"} id={"online"} select={true} />
            <EllipseBtn element={"오프라인"} id={"offline"} select={false} />
            <EllipseBtn
              element={"장소 협의 가능"}
              id={"anywhere"}
              select={false}
            />
          </div>
        </div>
        <div className={styles.questionBlock}>
          <h3 className={styles.question}>
            2. '강의 방식2'를 선택해주세요. (중복 선택 가능)
          </h3>
          <div className={styles.classType}>
            <EllipseBtn element={"1:1 수업"} id={"personal"} select={true} />
            <EllipseBtn element={"그룹 수업"} id={"group"} select={false} />
          </div>
        </div>

        <div className={styles.questionBlock}>
          <h3 className={styles.question}>
            3. 1:1 수업의 강의 가격을 입력해주세요.
          </h3>
          <ClassPrice />
        </div>

        {form.personal == "off" && form.group == "off" && (
          <div className={styles.basic} />
        )}

        {form.personal == "on" && (
          <div className={styles.questionBlock}>
            <h3 className={styles.question}>
              3. 1:1 수업의 강의 가격을 입력해주세요.
            </h3>
            <ClassCost
              form={form}
              handleChange={handleChange}
              distinct={"personal"}
            />
          </div>
        )}

        {form.group == "on" && (
          <div className={styles.questionBlock}>
            <h3 className={styles.question}>
              {form.personal == "on" ? <span>4</span> : <span>3</span>}. 그룹
              수업의 강의 가격을 입력해주세요.
            </h3>
          </div>
        )}
      </section>

      <BottomBlueBtn text={"강의 업로드"} />
    </div>
  );
};
export default Step03;
