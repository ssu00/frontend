import axios from "axios";

export const GetMenteePicks = async (token, page) => {
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

export default GetMenteePicks;
