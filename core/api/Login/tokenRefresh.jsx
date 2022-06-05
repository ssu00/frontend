import Api, { METHOD } from "../apiController";
// import { setCookie } from "nookies";
// import { setCookie } from "../../../utils/cookie";
import { setCookies, getCookie } from "cookies-next";

export const tokenRefresh = async (access, refresh, role) => {
  const res = await Api({
    method: METHOD.POST,
    url: "/refresh-token",
    headers: {
      Authorization: access,
      ["X-Access-Token"]: access,
      ["X-Refresh-Token"]: refresh,
      role: role,
    },
  });
  // console.log("Res=", res);
  // setCookie("accessToken", res.headers["x-access-token"], {
  //   path: "/",
  //   secure: true,
  //   withCredentials: true,
  // });
  return res;
};
