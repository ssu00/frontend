import React, { useState } from "react";
import styles from "./template.module.scss";
import TopBar from "../components/TopBar";
import ReviewCategory from "../components/mypageReviewInfo/ReviewCategory";
import WriteContent from "../components/mypageReviewInfo/WriteContent";
import NavBar from "../components/NavBar";
import ReviewContent from "../components/mypageReviewInfo/ReviewContent";
import EmptyBox from "../components/mypageReviewInfo/EmptyBox";

function mypageReviewInfo(props) {
  const [Category, setCategory] = useState("후기작성");
  const getCategory = (value) => {
    setCategory(value);
  };
  return (
    <main className={styles.main}>
      <TopBar title="강의후기" />
      <ReviewCategory getCategory={getCategory} />
      {Category === "후기작성" ? (
        <>
          {/* 데이터가  없으면 EmptyBox 컴포넌트, 데이터가 있으면 WriteContent 컴포넌트*/}
          {/* <EmptyBox title="작성 가능한 후기가 없습니다." /> */}
          <WriteContent />
          <WriteContent />
        </>
      ) : (
        <>
          {/* 데이터가  없으면 EmptyBox 컴포넌트, 데이터가 있으면 WriteContent 컴포넌트*/}
          {/* <EmptyBox title="작성한 후기가 없습니다." /> */}
          <ReviewContent />
          <ReviewContent />
        </>
      )}

      <NavBar />
    </main>
  );
}

export default mypageReviewInfo;
