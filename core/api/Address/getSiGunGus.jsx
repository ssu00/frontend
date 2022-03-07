import axios from "axios";
const GetSiGunGus = (state) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/addresses/siGunGus", { params: { state: state } })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export default GetSiGunGus;
