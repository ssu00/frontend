import BottomTab from "../components/bottomtab";
import SearchSection from "../components/mypage/searchSection";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import { RefundBox } from "../components/mypage/tuteeBox";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./refundList.module.scss";
import { ReasonModal, RefundModal } from "../components/mypage/modal";
const RefundList = () => {
  const [res, setRes] = useState("");
  const [reasonM, setReasonM] = useState(false);
  const [acceptM, setAcceptM] = useState(false);
  const [accept, setAccept] = useState(false);
  const getRefund = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
    }

    axios.get("/tutors/my-cancellations").then((response) => {
      console.log(response.data);
      setRes(response.data);
    });
  };

  useEffect(() => {
    getRefund();
  }, []);

  return (
    <section className={styles.refundList}>
      <OtherTopBar title={"환불 목록"} url={"/mypage"} />
      <SearchSection text1={"전체 환불"} text2={"최근 1년"} />
      <div className={styles.line} />
      <section className={styles.refundContent}>
        {res.content?.map((data, i) => {
          let state = "";
          data.lecture?.systemTypes.map((type, i) => {
            state += type.name;
            if (i != 0) {
              state += "/";
            }
          });
          return (
            <div key={i}>
              <RefundBox
                date={"2021.07.01"}
                name={data.tuteeName}
                title={data.lecture.title}
                type={state}
                price={data.lecture.lecturePrice.totalCost.toLocaleString(
                  "ko-KR"
                )}
                img={data.lecture.thumbnail}
                value={reasonM}
                setValue={setReasonM}
                value2={acceptM}
                setValue2={setAcceptM}
              />
              <div className={styles.modal}>
                {reasonM ? (
                  <ReasonModal
                    reason={data.reason}
                    value={reasonM}
                    setValue={setReasonM}
                  />
                ) : acceptM ? (
                  <RefundModal
                    cancellationId={data.cancellationId}
                    modal={acceptM}
                    setModal={setAcceptM}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          );
        })}
      </section>
      <div className={styles.fixed}>
        <BottomTab num={3} />
      </div>
    </section>
  );
};

export default RefundList;
