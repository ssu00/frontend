import axios from "axios";

export const getViewLecture = async (id, token) => {
  try {
    const res = await axios.get(`mentees/my-review/${id}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
