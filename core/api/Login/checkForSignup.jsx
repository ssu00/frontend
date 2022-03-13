import axios from "axios";
const NickNameDupCheck = async (nickname) => {
  try {
    const res = await axios.get(`/check-nickname?nickname=${nickname}`);
    console.log(res);
    return res.data;
  } catch (err) {
    return err;
  }
};

const EmailDupCheck = async (email) => {
  try {
    const res = await axios.get(`/check-username?username=${email}`);
    console.log(res);
    return res.data;
  } catch (err) {
    return err;
  }
};

export { NickNameDupCheck, EmailDupCheck };
