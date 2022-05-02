//
import axios from "axios";

export const getOneMentorLecture = async (token, mentorId, page) => {
  try {
    const res = await axios.get(`/mentors/${mentorId}/reviews?page=${page}`, {
      headers: { Authorization: token },
    });

    return res.data;
  } catch (e) {
    console.log(e);
  }
};
