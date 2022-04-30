import axios from "axios";

const GetViewMentor = async (token, data) => {
  try {
    const res = await axios.get(`/mentors/${data}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetViewMentor;
