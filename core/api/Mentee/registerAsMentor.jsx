import Api, { METHOD } from "../apiController";
import { TransEduLevelToEng } from "../../../components/mentor/transform";

export const registerAsMentor = async (bio, career, education, token) => {
  const eduLevel = TransEduLevelToEng(education.educationLevel);
  const res = await Api({
    method: METHOD.POST,
    url: "/mentors",
    headers: { Authorization: token },
    data: {
      bio: bio,
      careers: [career],
      educations: [
        {
          ...education,
          educationLevel: eduLevel,
        },
      ],
    },
  });

  return res.status;
};
