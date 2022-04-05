import axios from "axios";

export const GetMenteePicks = async (token) => {
  try {
    const res = await axios.get(`/mentees/my-picks`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetMenteePicks;
