import axios from "axios";

export const getMentorLectureList = async (token, data) => {
  try {
    const res = await axios.get(`/mentors/${data}/lectures`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
