import React from "react";
import wrapper from "../core/redux/store";
import "../styles/globals.css";
import axios from "axios";
import Head from "next/head";

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

export default wrapper.withRedux(MyApp);
