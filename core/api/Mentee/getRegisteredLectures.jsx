import Api, { METHOD } from "../apiController";

export const getRegisteredLectures = async (token, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentees/my-enrollments?page=${page}`,
    headers: { Authorization: token },
  });
  return res.data;
};
