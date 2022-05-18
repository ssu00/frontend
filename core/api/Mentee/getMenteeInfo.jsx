import axios from "axios";
export const getMenteeInfo = async (mentee_id) => {
  try {
    const res = await axios.get(`/mentees/${mentee_id}`);
    console.log("mentee res=", res.data);
    return res.data;
  } catch (err) {
    return err;
  }
};
