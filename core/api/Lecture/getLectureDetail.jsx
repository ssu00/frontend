import Api, { METHOD } from "../apiController";

export const getLectureDetail = async (id, token) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/my-lectures/${id}`,
    headers: { Authorization: token },
  });

  return res.data;
};
