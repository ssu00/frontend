import Api, { METHOD } from "../apiController";

export const getMyLectures = async (pageNum) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/my-lectures?page=${pageNum}`,
  });

  return res.data;
};
