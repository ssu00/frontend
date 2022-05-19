import Api, { METHOD } from "../apiController";
export const registerMentor = async ({ bio, career, education, token }) => {
  const res = await Api({
    method: METHOD.POST,
    url: `/mentors`,
    data: {
      bio: bio,
      careers: [career],
      educations: [education],
    },
  });
  return res;
};
