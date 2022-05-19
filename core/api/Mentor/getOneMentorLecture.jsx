import Api, { METHOD } from "../apiController";
export const getOneMentorLecture = async (mentorId, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/${mentorId}/reviews?page=${page}`,
  });
  return res.data;
};
