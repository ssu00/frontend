import axios from "axios";

export const getUnreviewedMentee = async (token) => {
  try {
    const res = await axios.get("/mentees/my-enrollments/unreviewed", {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
