import React from "react";
import * as cookie from "cookie";
import { editReview } from "../../../../../core/api/Mentee/editReview";

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const edit = await editReview(token);

  return {
    props: { token, edit },
  };
}

const edit = ({ edit }) => {
  console.log(edit);
  return <>test</>;
};

export default edit;
