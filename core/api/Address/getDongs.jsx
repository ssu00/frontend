// import axios from "axios";
// const GetDongs = (state, siGunGu) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get("/addresses/dongs", {
//         params: {
//           state: state,
//           siGunGu: siGunGu,
//         },
//       })
//       .then((res) => resolve(res))
//       .catch((err) => reject(err));
//   });
// };

// export default GetDongs;

import Api, { METHOD } from "../apiController";

const GetDongs = (state, siGunGu) => {
  return Api({
    method: METHOD.GET,
    url:
      (`/addresses/dongs`,
      {
        params: {
          state: state,
          siGunGu: siGunGu,
        },
      }),
  });
};

export default GetDongs;
