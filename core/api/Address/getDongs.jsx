import Api, { METHOD } from "../apiController";
export const getDongs = async (state, siGunGu) => {
  return await Api({
    method: METHOD.GET,
    url: `/addresses/dongs`,
    params: {
      state: state,
      siGunGu: siGunGu,
    },
  });
};
