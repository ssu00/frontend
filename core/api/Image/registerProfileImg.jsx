import Api, { METHOD } from "../apiController";
export const registerProfileImg = async (token, imgUrl) => {
  return await Api({
    method: METHOD.PUT,
    url: `/users/my-info/image`,
    data: { image: imgUrl },
    headers: { Authorization: token },
  });
};
