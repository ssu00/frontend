import router from "next/router";
import styles from "../styles/myclass.module.scss";
import ClassCard from "../components/classcard";
import BottomTab from "../components/bottomtab";
import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const MyClass = ({}) => {
  const [response, setResponse] = useState("");
  const [res, setRes] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [totalElem, setTotalElem] = useState(0);

  const ClassLists = async () => {
    console.log(pageNum);
    await axios
      .get(`tutors/my-lectures?page=${pageNum}`)
      .then((res) => {
        setResponse([...response, res]);
        setTotalElem(response[0]?.data.totalElements);
        setRes(true);
        return response;
      })
      .catch((e) => {
        setRes(false);
        return Promise.reject(e);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/");
    } else {
      ClassLists();
    }
  }, [pageNum]);

  return res ? (
    <>
      <div className={styles.whitesection}>
        <h1 className={styles.title}>튜터</h1>
        <div className={styles.category}>
          <button
            type="button"
            className={styles.selected}
            onClick={() => router.push("/myclass")}
          >
            내 강의
          </button>
          <button
            type="button"
            className={styles.unselected}
            onClick={() => router.push("/classposting")}
          >
            강의 등록
          </button>
        </div>
      </div>
      <div className={styles.graysection}>
        <h3 className={styles.smallheadingB}>
          등록한 강의 총 {response[0].data?.totalElements}개
        </h3>
        {response ? (
          response.map((obj) => {
            const hasMore = !obj.data?.last;
            return (
              <>
                <InfiniteScroll
                  dataLength={obj.data.totalElements}
                  next={() => setPageNum(pageNum + 1)}
                  hasMore={hasMore}
                >
                  {obj.data ? (
                    obj.data.content.map((itemData) => {
                      return <ClassCard data={itemData} key={itemData.id} />;
                    })
                  ) : (
                    <h1>error1</h1>
                  )}
                </InfiniteScroll>
              </>
            );
          })
        ) : (
          <h1>error2</h1>
        )}
        <div className={styles.fixedTab}>
          <BottomTab num={1} />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
  {
    /*에러 페이지 */
  }
};
export default MyClass;
