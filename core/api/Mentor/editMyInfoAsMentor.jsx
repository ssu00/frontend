import axios from "axios";
import { TransEduLevelToEng } from "../../../components/mentor/transform";

const EditMyInfoAsMentor = async (bio, career, education, token) => {
  const eduLevel = TransEduLevelToEng(education.educationLevel);
  try {
    const res = await axios.put(
      "/mentors/my-info",
      {
        bio: bio,
        careers: [career],
        educations: [
          {
            ...education,
            educationLevel: eduLevel,
          },
        ],
      },
      {
        headers: { Authorization: token },
      }
    );
    return res.status;
  } catch (err) {
    return err;
  }
};

export default EditMyInfoAsMentor;
