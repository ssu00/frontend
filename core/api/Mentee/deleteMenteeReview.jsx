import Api, { METHOD } from "../apiController";

export const deleteMenteeReivew = async (token, reviewId) => {
  const res = await Api({
    method: METHOD.DELETE,
    url: `/mentees/my-reviews/${reviewId}`,
    headers: { Authorization: token },
  });

  return res;
};
