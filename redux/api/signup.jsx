import axios from "axios";
import router from "next/router";
export const SignUp = async (form) => {
  let gender = "MALE";
  if (form.gender == "M") {
    gender = "MALE";
  } else if (form.gender == "F") {
    gender = "FEMALE";
  }
  const data = {
    bio: "안녕하세요",
    birthYear: form.birthYear,
    email: form.email,
    gender: gender,
    image: "",
    name: form.name,
    nickname: form.name,
    password: form.password,
    passwordConfirm: form.passwordConfirm,
    phoneNumber: form.phoneNumber,
    username: form.email,
    zone: `${form.stateL} ${form.stateM} ${form.stateS}`,
  };

  await axios({
    method: "POST",
    url: "/sign-up",
    data: data,
  })
    .then((response) => {
      console.log("response", response);
      if (response.status == 201) {
        router.push("/login");
      }
      console.log("response: " + JSON.stringify(response));
      return response;
    })
    .catch((error) => {
      console.log("에러" + error.response.data.message);
      alert(error.response.data.message);
      return Promise.reject(error.response.data.message);
    });
};
