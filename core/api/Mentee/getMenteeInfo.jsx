import Api, { METHOD } from "../apiController";

export const getMenteeInfo = async (mentee_id) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentees/${mentee_id}`,
  });

  return res.data;
};
