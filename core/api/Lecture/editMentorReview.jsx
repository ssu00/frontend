import Api, { METHOD } from "../apiController";

export const editMentorReview = async (
  token,
  classID,
  parentID,
  childID,
  comment
) => {
  const res = await Api({
    method: METHOD.PUT,
    url: `/mentors/my-lectures/${classID}/reviews/${parentID}/children/${childID}`,
    content: comment,
    headers: { Authorization: token },
  });

  return res.status;
};
