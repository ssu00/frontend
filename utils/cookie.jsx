import Cookies from "universal-cookie";
const cookies = new Cookies();
export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const removeCookie = () => {
  cookies.remove("role", { path: "/" });
  cookies.remove("accessToken", { path: "/" });
  cookies.remove("refreshToken", { path: "/" });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const cookieForAuth = (res, role) => {
  setCookie("accessToken", res.headers["x-access-token"], {
    path: "/",
    secure: true,
  });
  setCookie("refreshToken", res.headers["x-refresh-token"], {
    path: "/",
    secure: true,
  });
  setCookie("role", role.loginType, {
    path: "/",
    secure: true,
  });
};
