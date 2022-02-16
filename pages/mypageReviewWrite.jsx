import React, { useState } from "react";
import styles from "./template.module.scss";
import TopBar from "../components/TopBar";
import ReviewCategory from "../components/mypageReivewWrite/ReviewCategory";
import WriteContent from "../components/mypageReivewWrite/WriteContent";
import NavBar from "../components/NavBar";
import ReviewContent from "../components/mypageReivewWrite/ReviewContent";

function mypageReviewWrite(props) {
  const [Category, setCategory] = useState("후기작성");
  const getCategory = (value) => {
    setCategory(value);
  };
  return (
    <main className={styles.main}>
      <TopBar title="강의후기" />
      <ReviewCategory getCategory={getCategory} />
      {Category === "후기작성" ? (
        <WriteContent />
      ) : (
        <>
          <ReviewContent />
          <ReviewContent />
          <ReviewContent />
          <ReviewContent />
        </>
      )}
      {/* <WriteContent /> */}

      <NavBar />
    </main>
  );
}

export default mypageReviewWrite;
