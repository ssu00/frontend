import axios from "axios";
export const getMenteePicks = async (token, page) => {
  try {
    const res = await axios.get(`/mentees/my-picks`, {
      headers: { Authorization: token },
      params: page,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
