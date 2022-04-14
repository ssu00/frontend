import axios from "axios";

export const getViewLecture = async (id, token) => {
  try {
    const res = await axios.get(`/mentees/my-lectures/${id}`, {
      headers: { Authorization: token },
    });
    console.log("res=", res);
    return res.data;
  } catch (err) {
    return err;
  }
};
