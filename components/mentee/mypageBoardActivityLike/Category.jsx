import React from "react";
import styles from "./Category.module.scss";
import router from "next/router";
function Category() {
  return (
    <div className={styles.container}>
      <ul>
        <li
          onClick={(e) => {
            e.preventDefault();
            router.push("/mentee/mypage/mypageBoardActivity");
          }}
        >
          작성한 글
        </li>
        <li
          onClick={(e) => {
            e.preventDefault();
            router.push("/mentee/mypage/mypageBoardActivityReple");
          }}
        >
          댓글단 글
        </li>
        <li
          className={styles.clicked}
          onClick={(e) => {
            e.preventDefault();
            router.push("/mentee/mypage/mypageBoardActivityLike");
          }}
        >
          좋아요한 글
        </li>
      </ul>
    </div>
  );
}

export default Category;
