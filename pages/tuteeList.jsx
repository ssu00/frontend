import OtherTopBar from "../components/mypage/topBar/otherPage";
import styles from "./tuteeList.module.scss";
import { TuteeBox, TuteeBox2 } from "../components/mypage/tuteeBox";
import BottomTab from "../components/bottomtab";
import SearchSection from "../components/mypage/searchSection";
import axios from "axios";
import { useEffect, useState } from "react";
const TuteeList = () => {
  const [info2, setInfo2] = useState("");
  const [info3, setInfo3] = useState("");
  const [closeInfo, setCloseInfo] = useState("");
  const [closeInfo2, setCloseInfo2] = useState("");
  const [tuteeName, setName] = useState("");
  const [closeTuteeName, setCloseName] = useState("");
  const [type, setType] = useState("");
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
  }

  const data = {
    closed: false,
  };
  const params = { closed: false };
  const closedparams = { closed: true };

  const getTuteeList = () => {
    axios.get("/tutors/my-tutees", { params }).then((response) => {
      setInfo2(response.data);
      console.log(response.data);
    });
  };

  const getClosedTuteeList = () => {
    axios
      .get("/tutors/my-tutees", { params: closedparams })
      .then((response) => {
        setCloseInfo(response.data);
        console.log(response.data);
      });
  };

  const getTuteeClass = (infoTuteeId, infoName) => {
    axios
      .get(`/tutors/my-tutees/${infoTuteeId}`, { params })
      .then((response) => {
        setInfo3(response.data);
        setType(response.data.content[0].lecture.systemTypes[0].name);
        setName(infoName);
        console.log(response);
      });
  };

  const getClosedTuteeClass = (infoTuteeId, infoName) => {
    axios
      .get(`/tutors/my-tutees/${infoTuteeId}`, { params: closedparams })
      .then((response) => {
        setCloseInfo2(response.data);
        setType(response.data.content[0].lecture.systemTypes[0].name);
        setCloseName(infoName);
        console.log(response);
      });
  };

  useEffect(() => {
    getTuteeList();
    getClosedTuteeList();
  }, []);

  return (
    <section className={styles.tuteeList}>
      <OtherTopBar title={"튜티 목록"} url={"/mypage"} />
      <SearchSection text1={"전체 튜티"} text2={"신규 튜티"} />
      <div className={styles.line} />
      <section className={styles.ing}>
        <h1 className={styles.title}>강의 진행 중인 튜티</h1>
        {info2 && info3 == ""
          ? info2.content?.map((data, i) => {
              return (
                <TuteeBox
                  name={data.name}
                  key={i}
                  count={"1"}
                  onClick={() => getTuteeClass(data.tuteeId, data.name)}
                />
              );
            })
          : info3.content?.map((data, i) => {
              return (
                <TuteeBox2
                  name={tuteeName}
                  title={data.lecture.title}
                  type={type}
                  price={data.lecture.lecturePrice.totalCost.toLocaleString(
                    "ko-KR"
                  )}
                  img={data.lecture.thumbnail}
                  onClick={() => setInfo3("")}
                  lecID={data.lecture.lectureId}
                  chatID={data.chatroomId}
                  tuteeID={data.tuteeId}
                  key={i}
                />
              );
            })}
      </section>
      <div className={styles.line} />
      <section className={styles.finished}>
        <h1 className={styles.title}>강의 종료된 튜티</h1>
        {closeInfo && closeInfo2 == ""
          ? closeInfo.content?.map((data, i) => {
              return (
                <TuteeBox
                  name={data.name}
                  key={i}
                  count={"1"}
                  onClick={() => getClosedTuteeClass(data.tuteeId, data.name)}
                />
              );
            })
          : closeInfo2.content?.map((data, i) => {
              return (
                <TuteeBox2
                  name={closeTuteeName}
                  title={data.lecture.title}
                  type={type}
                  price={data.lecture.lecturePrice.totalCost.toLocaleString(
                    "ko-KR"
                  )}
                  img={data.lecture.thumbnail}
                  onClick={() => setCloseInfo2("")}
                  lecID={data.lecture.lectureId}
                  key={i}
                />
              );
            })}
      </section>
      <div className={styles.fixed}>
        <BottomTab num={3} />
      </div>
    </section>
  );
};

export default TuteeList;
