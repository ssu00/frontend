import axios from "axios";
const DeleteLecture = async (token, classID) => {
  try {
    const res = await axios.delete(`/lectures/${classID}`, {
      headers: { Authorization: token },
    });
    console.log(res);
    return res.status;
  } catch (err) {
    return err;
  }
};

export default DeleteLecture;
