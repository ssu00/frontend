import React from "react";
import wrapper from "../core/redux/store";
import "../styles/globals.css";
import axios from "axios";
import Head from "next/head";
import "react-image-crop/src/ReactCrop.scss"; //react-image-crop에 영향이 있기 때문에 절대 지우면 안 됨!
import * as cookie from "cookie";

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

  const title = "";

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0" />
        <meta property="og:title" content={title ? title : "멘토릿지"} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (context) => {
  const token =
    context.ctx.req && context.ctx.req.headers.cookie
      ? cookie.parse(context.ctx.req.headers.cookie).accessToken
      : "";
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = token;
  return {};
};

export default wrapper.withRedux(MyApp);
