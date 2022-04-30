import axios from "axios";

export const getMentorLectureList = async (token, data) => {
  try {
    const res = await axios.get(`/mentors/${data.id}/lectures`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
