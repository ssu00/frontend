import axios from "axios";
import { refreshToken } from "./Login";

const myAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

myAxios.interceptors.request.use(
  async (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

myAxios.interceptors.response.use(
  async function (response) {
    let cookie = myAxios.defaults.headers.common["Cookies"];
    refreshToken(cookie.access, cookie.refresh, cookie.role);
    return response;
  },
  async function (error) {
    return error.response;
  }
);

export const METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export default myAxios;
