import ImgSection from "../../components/classmain/ImgSection";
import IntroSection from "../../components/classmain/IntroSection";
import style from "../classMain.module.scss";
import ReviewSection from "../../components/classmain/ReviewSection";
import TotalReview from "../../components/classmain/TotalReview";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import renderHTML from "react-render-html";
import InfiniteScroll from "react-infinite-scroll-component";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
} //getServerSideProps 없으면 새로 고침 시 에러!

const ClassMain = () => {
  const [select, setSelect] = useState(true);
  const [introduce, setIntroduce] = useState("");
  const [data, setData] = useState("");
  const [review, setReview] = useState("");
  const [myName, setMyName] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [remove, setRemove] = useState(false);
  const router = useRouter();
  const classID = router.query.classmain;

  const ClassMainContent = async () => {
    try {
      await axios.get(`/lectures/${classID}`).then((res) => {
        setIntroduce(res.data.content);
        setData(res.data);
        console.log(res);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const getMyInfo = () => {
    axios
      .get("/users/my-info")
      .then((res) => {
        setMyName(res.data.username);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const GetReview = async () => {
    try {
      await axios
        .get(`/tutors/my-lectures/${classID}/reviews?page=${pageNum}`)
        .then((res) => {
          console.log(res);
          setReview([...review, res]);
        });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const DeleteModal = () => {
    useEffect(() => {
      window.addEventListener("click", (e) => {
        const classBack = document.getElementById("classBack");
        e.target === classBack ? (classBack.style.display = "none") : false;
      });
    }, []);

    const DeleteClass = () => {
      axios
        .delete(`/lectures/${classID}`)
        .then((response) => {
          console.log(response);
          router.push("/myclass");
        })
        .catch((e) => {
          console.log(e);
          alert("수강자가 있으므로 강의를 종료하실 수 없습니다.");
          const classBack = document.getElementById("classBack");
          classBack ? (classBack.style.display = "none") : "";
        });
    };

    return (
      <div className={style.classModal} id="classModal">
        <p className={style.text}>
          <strong>
            삭제하면 되돌릴 수 없습니다.
            <br />
            정말 삭제하시겠습니까?
          </strong>
        </p>
        <div className={style.choose}>
          <button
            type="button"
            className={style.no}
            onClick={() => {
              const classBack = document.getElementById("classBack");
              classBack ? (classBack.style.display = "none") : "";
            }}
          >
            아니오
          </button>
          <button
            type="button"
            className={style.ok}
            onClick={() => DeleteClass()}
          >
            네
          </button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/");
    } else {
      getMyInfo();
      ClassMainContent();
    }
  }, []);

  useEffect(() => {
    GetReview();
  }, [pageNum]);

  return data != "" ? (
    <section className={style.main}>
      <div className={style.btnSet}>
        <button
          type="button"
          className={style.edit}
          onClick={() =>
            router.push({
              pathname: `/classEdit`,
              query: {
                id: data.id,
              },
            })
          }
        >
          <span className={style.btnText}>수정</span>
        </button>
        <button
          type="button"
          className={style.close}
          onClick={() => {
            setRemove(true);
            const classBack = document.getElementById("classBack");
            classBack ? (classBack.style.display = "block") : "";
          }}
        >
          <span className={style.btnText}>종료</span>
        </button>
      </div>
      <ImgSection thumbnail={data?.thumbnail} online={1} offline={1} />
      <IntroSection
        tutorname={data?.lectureTutor.nickname}
        title={data?.title}
        rating={data?.scoreAverage.toFixed(1)}
        reviewCnt={data?.reviewCount}
        subheading={data?.subTitle}
        originPrice={data?.lecturePrices[0]?.totalCost}
        originPrice2={data?.lecturePrices[1]?.totalCost}
        group={data?.lecturePrices[0]?.isGroup}
        group2={data?.lecturePrices[1]?.isGroup}
        discount={0}
        finalPrice={data?.lecturePrices[0]?.totalCost}
        finalPrice2={data?.lecturePrices[1]?.totalCost}
        setReview={setSelect}
        // notes={Data.notes}
      ></IntroSection>

      <div className={style.category}>
        <button
          className={select ? style.selected : style.unselected}
          onClick={() => setSelect(true)}
        >
          강의소개
        </button>
        <button
          className={select ? style.unselected : style.selected}
          onClick={() => setSelect(false)}
        >
          리뷰({data.reviewCount})
        </button>
      </div>

      {remove ? (
        <div className={style.classBack} id="classBack">
          <div className={style.modal} id="modal">
            <DeleteModal />
          </div>
        </div>
      ) : (
        <></>
      )}

      {select ? (
        <div className={style.classIntroduce}>{renderHTML(introduce)}</div>
      ) : (
        <>
          <TotalReview
            totalRating={data?.scoreAverage.toFixed(1)}
            reviewCnt={data.reviewCount}
          />
          {review ? (
            review.map((obj, i) => {
              const hasMore = !obj.data?.last;
              return (
                <>
                  <InfiniteScroll
                    dataLength={obj.data.totalElements}
                    next={() => setPageNum(pageNum + 1)}
                    hasMore={hasMore}
                    key={i}
                  >
                    {obj.data ? (
                      obj.data.content.map((itemData, index) => {
                        return (
                          <ReviewSection
                            // Uprofile={"/images/classImage.jpg"}
                            Uname={itemData.username}
                            Udate={itemData.createdAt.substring(0, 10)}
                            URating={itemData.score}
                            Ureview={itemData.content}
                            TutorReview={itemData.child}
                            ReviewId={itemData.reviewId}
                            ClassId={classID}
                            key={index}
                          />
                        );
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
        </>
      )}
    </section>
  ) : (
    <></>
  );
};
export default ClassMain;
