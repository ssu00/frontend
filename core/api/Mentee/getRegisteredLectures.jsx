import axios from "axios";

export const getRegisteredLectures = async (token, page) => {
  try {
    const res = await axios.get(`/mentees/my-enrollments`, {
      headers: { Authorization: token },
      params: page,
    });

    return res.data;
  } catch (err) {
    return err;
  }
};
