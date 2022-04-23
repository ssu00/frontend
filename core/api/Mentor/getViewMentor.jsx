import axios from "axios";

export const getViewMentor = async (token, data) => {
  try {
    const res = await axios.get(`/mentors/${data.id}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
