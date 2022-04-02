import React from "react";
import { getMyReviews } from "../../../../../core/api/Mentee/getMyReviews";
import { BottomTab, TopBar } from "../../../../../components/common";
import styles from "./Content.module.scss";
import router from "next/router";
import { IC_Menu } from "../../../../../icons";
import { useState, useEffect } from "react";
import OptionModal from "../../../../../components/old-mentee/OptionModal";

export async function getServerSideProps(context) {
  const reviewID = context.query.id;
  const reviewData = await getMyReviews(reviewID);
  return {
    props: { reviewID, reviewData },
  };
}

const myReview = ({ reviewID, reviewData }) => {
  const [review, setReivew] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setReivew(reviewData);
  }, []);

  console.log(reviewData);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <section className={styles.topSection}>
        <TopBar
          text="후기 상세보기"
          onClick={() => {
            router.back();
          }}
        />
        <IC_Menu className={styles.pointer} onClick={handleModal} />
        {modal && (
          <OptionModal
            editClick={() => {
              console.log("test");
            }}
            deleteClick={() => {
              console.log("test");
            }}
            modalHandler={handleModal}
          />
        )}
      </section>
      <section className={styles.container}>
        <article>{}</article>
      </section>
      <div className={styles.line} />

      <BottomTab num={[0, 0, 0, 1]} />
    </>
  );
};

export default myReview;
