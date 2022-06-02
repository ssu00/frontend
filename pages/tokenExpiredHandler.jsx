// import { refreshToken } from "../core/api/Login";
import myAxios from "../core/api/apiController";
import { refreshToken } from "../core/api/Login";
export const METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

const TokenExpiredHandler = ({ myTokens, children }) => {
  myAxios.interceptors.response.use(
    async function (response) {
      //   console.log("response============================", response);
      const res = await refreshToken(
        myTokens.access,
        myTokens.refresh,
        myTokens.role
      );
      //   const res = await Api({
      //     method: METHOD.POST,
      //     url: "/refresh-token",
      //     headers: {
      //       Authorization: myTokens.access,
      //       ["X-Access-Token"]: myTokens.access,
      //       ["X-Refresh-Token"]: myTokens.refresh,
      //       role: myTokens.role,
      //     },
      //   });
      console.log(
        "============================================================================================",
        res
      );
      return response;
    },
    async function (error) {
      //   const res = await Api({
      //     method: METHOD.POST,
      //     url: "/refresh-token",
      //     headers: {
      //       Authorization: myTokens.access,
      //       ["X-Access-Token"]: myTokens.access,
      //       ["X-Refresh-Token"]: myTokens.refresh,
      //       role: myTokens.role,
      //     },
      //   });
      console.log("response============================", error);
      //      console.log("this is refresh token response ============== ", res);
      //   if (error.response.data.code == 401) {
      // return <TokenExpiredHandler />;
      //   }
      // console.log("error============================", error);
      // if (
      //   error.response.data.code == 401 &&
      //   error.response.data.message == "Token Expired"
      // ) {
      //   let cookie = myAxios.defaults.headers.common["Set-Cookie"];
      //   if (cookie != undefined)
      //     refreshToken(cookie.access, cookie.refresh, cookie.role);
      // }
      return error.response;
    }
  );
  return children;
};

// // export default myAxios;

export default TokenExpiredHandler;
