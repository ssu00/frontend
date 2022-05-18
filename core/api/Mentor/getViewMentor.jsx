import Api, { METHOD } from "../apiController";

export const getViewMentor = async (data) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/${data}`,
  });
  return res.data;
};
