import axios from "axios";

const ResignMembership = async (token, data) => {
  try {
    const res = await axios.delete("/users", data, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default ResignMembership;
