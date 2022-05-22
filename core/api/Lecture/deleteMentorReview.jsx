import Api, { METHOD } from "../apiController";

export const deleteMentorReview = async (token, classID, parentID, childID) => {
  const res = await Api({
    method: METHOD.DELETE,
    url: `/mentors/my-lectures/${classID}/reviews/${parentID}/children/${childID}`,
    headers: { Authorization: token },
  });
  return res.status;
};
