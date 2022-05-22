import Api, { METHOD } from "../apiController";
import { TransEduLevelToEng } from "../../../components/mentor/transform";
export const editMyInfoAsMentor = async (bio, career, education, token) => {
  const eduLevel = TransEduLevelToEng(education.educationLevel);
  const res = await Api({
    method: METHOD.PUT,
    url: "/mentors/my-info",
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
