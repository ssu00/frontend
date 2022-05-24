import Api, { METHOD } from "../apiController";

export const getReview = async (data) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/my-lectures/${data}/reviews`,
  });

  return res.data;
};
