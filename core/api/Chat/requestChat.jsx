import Api, { METHOD } from "../apiController";
export const requestChatToMentee = async (token, menteeId) => {
  const res = await Api({
    method: METHOD.POST,
    url: `/chat/mentor/me/mentee/${menteeId}`,
    headers: { Authorization: token },
  });
  return res.data;
};

export const requestChatToMentor = async (token, mentorId) => {
  const res = await Api({
    method: METHOD.POST,
    url: `/chat/mentee/me/mentor/${mentorId}`,
    headers: { Authorization: token },
  });
  return res.data;
};
