import axios from "axios";

export const ChangeRoleType = async (token) => {
  try {
    const res = await axios.get(`/change-type`, {
      headers: { Authorization: token },
    });

    return res.data;
  } catch (err) {
    return err;
  }
};

export default ChangeRoleType;
