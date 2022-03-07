import axios from "axios";
const SignUp_API = (user, basicData, addr) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/sign-up", {
        bio: "안녕하세요",
        birthYear: basicData.year,
        email: user.email,
        gender: basicData.gender == "남자" ? "MALE" : "FEMALE",
        image: "string",
        name: user.name,
        nickname: user.name,
        password: user.pw,
        passwordConfirm: user.pwConfirm,
        phoneNumber: user.phone,
        username: user.email,
        zone: `${addr.statePick} ${addr.sigunguPick} ${addr.dongPick}`,
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export default SignUp_API;
