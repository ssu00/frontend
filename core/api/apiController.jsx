import axios from "axios";
// import TokenExpiredHandler from "../../pages/tokenExpiredHandler";
import { refreshToken } from "./Login";

const myAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// myAxios.interceptors.request.use(
//   async (config) => {
//     // console.log("config============================", config);
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

// myAxios.interceptors.response.use(
//   async function (response) {
//     // return <TokenExpiredHandler />;
//     // console.log("response============================", response);
//     return response;
//   },
//   async function (error) {
//     if (error.response.data.code == 401) {
//       // return <TokenExpiredHandler />;
//     }
//     // console.log("error============================", error);
//     // if (
//     //   error.response.data.code == 401 &&
//     //   error.response.data.message == "Token Expired"
//     // ) {
//     //   let cookie = myAxios.defaults.headers.common["Set-Cookie"];
//     //   if (cookie != undefined)
//     //     refreshToken(cookie.access, cookie.refresh, cookie.role);
//     // }
//     return error.response;
//   }
// );

// export const METHOD = {
//   GET: "GET",
//   POST: "POST",
//   PUT: "PUT",
//   PATCH: "PATCH",
//   DELETE: "DELETE",
// };

export default myAxios;
