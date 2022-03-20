import axios from "axios";
const GetMyMentees = async (token, page, closed) => {
  try {
    const res = await axios.get(
      `/mentors/my-mentees?closed=${closed}&page=${page}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log("res=", res);
    return res.data;
  } catch (err) {
    return err;
  }
};

const GetMenteeLecture = async (token, mentee, closed, page) => {
  try {
    const res = await axios.get(
      `/mentors/my-mentees/${mentee}?closed=${closed}&page=${page}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export { GetMenteeLecture };
export default GetMyMentees;
