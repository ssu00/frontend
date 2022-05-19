import Api, { METHOD } from "../apiController";
export const getMyInfoAsMentor = async () => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/my-info`,
  });
  return res.data;
};
