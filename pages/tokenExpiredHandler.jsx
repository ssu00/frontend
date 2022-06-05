// import Api, { METHOD } from "../apiController";
// import * as cookie from "cookie";
// export const getServerSideProps = async (context) => {
//   const token = cookie.parse(context.req.headers.cookie);
//   return {
//     props: {
//       token,
//     },
//   };
// };

// import myAxios from "../core/api/apiController";
// import { refreshToken } from "../core/api/Login";
// import { cookieForAuth } from "../utils/cookie";
// import { METHOD } from "../core/api/apiController";
// import { useEffect, useMemo, useCallback } from "react";
// import * as cookie from "cookie";
// export const getServerSideProps = async (context) => {
//   const token = cookie.parse(context.req.headers.cookie);
//   return {
//     props: {
//       token,
//     },
//   };
// };

// const TokenExpiredHandler = ({ token, children }) => {
//   console.log("token=", token);
//   myAxios.interceptors.response.use(
//     async function (response) {
//       return response;
//     },
//     async function (error) {
//       console.log("error");
//       const { config } = error;
//       console.log("error.response=", error.response.data);
//       if (
//         error.response.data.code == 401 &&
//         error.response.data.message == "Token Expired"
//       ) {
//         const origin = config;
//         // const res = await refreshToken(
//         //   myTokens.access,
//         //   myTokens.refresh,
//         //   myTokens.role
//         // );
//         console.log("origin=", origin);
//         const res = await myAxios({
//           method: METHOD.POST,
//           url: "/refresh-token",
//           headers: {
//             Authorization: myTokens.access,
//             ["X-Access-Token"]: myTokens.access,
//             ["X-Refresh-Token"]: myTokens.refresh,
//             role: myTokens.role,
//           },
//         });
//         let role = { loginType: myTokens.role };
//         console.log("res==", res, " role==", role);
//         cookieForAuth(res, role);
//         console.log("token expired!");
//         origin.headers.Authorization = `${res.headers["x-access-token"]}`;
//         return myAxios(origin);
//       }
//       return error.response;
//     }
//   );

//   return children;
// };

// export default TokenExpiredHandler;
