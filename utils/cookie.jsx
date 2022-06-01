import Cookies from "js-cookie";
export const setCookie = (name, value, option) => {
  return Cookies.set(name, value, { ...option });
};

export const removeInfo = () => {
  Cookies.remove("role", { path: "/" });
  Cookies.remove("accessToken", { path: "/" });
  Cookies.remove("refreshToken", { path: "/" });
  localStorage.clear();
};

export const getCookie = (name) => {
  return Cookies.get(name);
};

export const cookieForAuth = (res, role) => {
  setCookie("accessToken", res.headers["x-access-token"], {
    path: "/",
    secure: true,
    withCredentials: true,
  });
  setCookie("refreshToken", res.headers["x-refresh-token"], {
    path: "/",
    secure: true,
    withCredentials: true,
  });
  setCookie("role", role.loginType, {
    path: "/",
    secure: true,
    withCredentials: true,
  });
};
