import React, { useEffect, useState } from "react";
import wrapper from "../core/redux/store";
import "../styles/globals.css";
import axios from "axios";
import Head from "next/head";
import "react-image-crop/src/ReactCrop.scss"; //react-image-crop에 영향이 있기 때문에 절대 지우면 안 됨!
import * as cookie from "cookie";
import router from "next/router";
import "nprogress/nprogress.css";
import Loading from "../components/common/Loading";
import myAxios from "../core/api/apiController";
import Image from "next/Image";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

  const title = "";

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0" />
        <meta property="og:title" content={title ? title : "멘토릿지"} />
      </Head>
      <Component {...pageProps} />
      {/* <Component {...pageProps} access={accessToken} refresh={refreshToken} /> */}
    </>
  );
}

MyApp.getInitialProps = async (context) => {
  const accessToken =
    context.ctx.req && context.ctx.req.headers.cookie
      ? cookie.parse(context.ctx.req.headers.cookie).accessToken
      : "";
  // const refreshToken =
  //   context.ctx.req && context.ctx.req.headers.cookie
  //     ? cookie.parse(context.ctx.req.headers.cookie).refreshToken
  //     : "";
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = accessToken;
  myAxios.defaults.headers.common["Authorization"] = accessToken;
  return {};
  // return { accessToken, refreshToken };
};

export default wrapper.withRedux(MyApp);
