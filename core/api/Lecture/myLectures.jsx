import Api from "../apiController";
import { METHOD } from "../../../pages/tokenExpiredHandler";

export const getMyLectures = async (pageNum, token) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/my-lectures?page=${pageNum}`,
    headers: { Authorization: token },
  });
  // console.log("res=", res);
  return res.data;
};
