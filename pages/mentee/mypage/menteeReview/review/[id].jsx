import React from "react";
import { getWriteReview } from "../../../../../core/api/Mentee/getWriteReview";

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const writeReview = await getWriteReview(token);

  return {
    props: { writeReview },
  };
}

const WriteMentee = ({ writeReview }) => {
  console.log(writeReview);
  return <>null</>;
};

export default WriteMentee;
