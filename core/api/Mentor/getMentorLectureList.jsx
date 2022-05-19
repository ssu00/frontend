import Api, { METHOD } from "../apiController";
export const getMentorLectureList = async (data) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/${data}/lectures`,
  });
  return res.data;
};
