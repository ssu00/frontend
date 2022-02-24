import axios from "axios";
const GetStates = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/addresses/states")
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export default GetStates;
