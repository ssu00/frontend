import Api, { METHOD } from "../apiController";

export const getEachLecture = async (token, classID) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/my-lectures/${classID}`,
    headers: { Authorization: token },
  });

  return res.data;
};
