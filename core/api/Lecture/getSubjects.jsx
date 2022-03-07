import axios from "axios";

const GetSubjects = async () => {
  try {
    const res = await axios.get("/subjects");
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetSubjects;
