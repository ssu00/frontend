import Api, { METHOD } from "../apiController";
export const getMyInfoAsMentor = async (token) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/my-info`,
    headers: { Authorization: token },
  });
  return res.data;
};
