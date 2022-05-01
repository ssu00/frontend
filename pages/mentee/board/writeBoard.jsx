import React, { useEffect, useState } from "react";
import {
  BasicInputBox,
  BottomBlueBtn,
  TopBar,
} from "../../../components/common";
import BasicTextAreaBox from "../../../components/common/inputBox/basicTextAreaBox";
import { UploadPost } from "../../../core/api/Mentee/board";
import styles from "./writeboard.module.scss";
import * as cookie from "cookie";
import router from "next/router";

const WriteBoard = ({ token }) => {
  const [inquiryInfo, setInquiryInfo] = useState({
    content: "",
    title: "",
    category: "LECTURE_REQUEST",
    image: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [result, setResult] = useState({
    success: false,
    error: false,
    errorMsg: "",
  });

  useEffect(() => {
    setResult({ success: false, error: false, errorMsg: "" });
    if (
      inquiryInfo.content == "" ||
      inquiryInfo.title == "" ||
      inquiryInfo.category == ""
    ) {
      setErrMsg("빈칸을 모두 채워주세요.");
    } else {
      setErrMsg("");
    }
  }, [inquiryInfo]);

  return (
    <section className={styles.changeInquiry}>
      <TopBar text={"글쓰기"} onClick={() => router.back()} />
      <p className={styles.content}>
        <BasicInputBox
          type={"text"}
          placeholder={"카테고리"}
          // onChange={(e) =>
          //   setInquiryInfo({ ...inquiryInfo, category: e.target.value })
          // }
          style={styles.titleBox}
        />
        <BasicInputBox
          type={"text"}
          placeholder={"제목을 입력해주세요."}
          onChange={(e) =>
            setInquiryInfo({ ...inquiryInfo, title: e.target.value })
          }
          style={styles.titleBox}
        />
      </p>
      <div className={styles.line} />
      <section className={styles.content}>
        <BasicTextAreaBox
          type={"text"}
          placeholder={"내용을 입력하세요."}
          onChange={(e) =>
            setInquiryInfo({ ...inquiryInfo, content: e.target.value })
          }
          style={styles.areaBox}
        />
      </section>
      <p className={styles.text}>
        질문게시판은 강의 및 개발 관련해서 자유롭게 묻고 답하는 게
        <br />
        시판 입니다. 게시판 목적과 다른 내용의 글이 올라올 경우, 무
        <br />
        통보 삭제되며 서비스 이용이 일시적 제한될 수 있습니다.
      </p>
      <BottomBlueBtn
        text={"업로드"}
        disabled={!(errMsg == "")}
        onClick={async () => {
          const res = await UploadPost(token, inquiryInfo);
          if (res.status == 201)
            setResult({ success: true, error: false, errorMsg: "" });
          else
            setResult({
              success: false,
              error: true,
              errorMsg: res.data.errorDetails[0],
            });
        }}
      />
      <span className={styles.msg}>
        {errMsg}
        {result.errorMsg}
      </span>
      <span className={styles.successMsg}>
        {result.success && "게시판이 등록되었습니다."}
      </span>
    </section>
  );
};

export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const role = cookie.parse(context.req.headers.cookie).role;

  return {
    props: {
      token,
    },
  };
};

export default WriteBoard;
