import Api, { METHOD } from "../apiController";

export const writeMentorReview = async (token, classID, parentID, comment) => {
  const res = await Api({
    method: METHOD.POST,
    url: `/mentors/my-lectures/${classID}/reviews/${parentID}`,
    data: { content: comment },

    headers: { Authorization: token },
  });

  return res.status;
};
