import axios from "axios";

export const GetRegisteredLectures = async (token, page) => {
  try {
    const res = await axios.get(`/mentees/my-lectures`, {
      headers: { Authorization: token },
      params: page,
    });

    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetRegisteredLectures;
