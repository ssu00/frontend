import Api, { METHOD } from "../apiController";
export const uploadImage = async (data, token) => {
  return await Api({
    method: METHOD.POST,
    url: `/uploads/images`,
    data: data,
    headers: { Authorization: token, "Content-Type": "multipart/form-data" },
  });
};
