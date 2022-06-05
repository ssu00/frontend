import Api, { METHOD } from "../apiController";

export const getMyLectures = async (pageNum, token) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/my-lectures?page=${pageNum}`,
    headers: { Authorization: token },
  });
  return res.data;
};
