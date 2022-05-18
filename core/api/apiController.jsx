import axios from "axios";
import { cookieForAuth, getCookie } from "../../utils/cookie";
const myAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

myAxios.interceptors.request.use(
  async (config) => {
    // if (!config.headers["Authorization"]) {
    //   config.headers["Authorization"] = `Bearer ${process.env.REACT_APP_KEY}`;
    // }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

myAxios.interceptors.response.use(
  function (response) {
    console.log("non-err response================", response);
    return response;
  },
  function async(error) {
    console.log("err response================", error);
    if (
      error.response.status == 401 &&
      error.response.message == "Token Expired"
    ) {
      console.log("token expired");
      // const data = await axios.post('/refresh-token',{
      //   ['X-Access-Token']:getCookie("accessToken"),
      //   ['X-Refresh-Token']:getCookie("refreshToken")
      // });
      // cookieForAuth(data,getCookie("role"));
    }
    return error.response;
  }
);

export default myAxios;
