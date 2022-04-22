import axios from "axios";
import qs from "qs";

export const GetLecture = async (token, data) => {
  try {
    const res = await axios.get(`/lectures`, {
      headers: { Authorization: token },
      params: data,
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetLecture;
