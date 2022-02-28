import axios from "axios";
const GetLectureLevel = (form) => {
  let level = "BASIC";
  switch (form.level) {
    case "입문":
      level = "BASIC";
      break;
    case "초급":
      level = "BEGINNER";
      break;
    case "중급":
      level = "INTERMEDIATE";
      break;
    case "고급":
      level = "ADVANCED";
      break;
    default:
      level = "BASIC";
  }
  return level;
};

const GetLectureSystemArray = (form) => {
  let systemArray = [];
  if (form.online == "on") {
    systemArray.push("ONLINE");
  }
  if (form.offline == "on") {
    systemArray.push("OFFLINE");
  }
  if (form.discuss == "on") {
    systemArray.push("DISCUSS");
  }
  return systemArray;
};

const GetLecturePriceArray = (form) => {
  let priceArray = [];
  let personalPrice = new Object(),
    groupPrice = new Object();

  if (form.personal == "on") {
    personalPrice.isGroup = false;
    personalPrice.numberOfMembers = 0;
    personalPrice.numberOfLectures = form.PnumOfClass;
    personalPrice.pricePerHour = form.PpricePerHour; //시간당 비용
    personalPrice.timePerLecture = form.PtimePerClass; //1회당 강의 시간
    personalPrice.totalPrice =
      form.PpricePerHour * form.PnumOfClass * form.PtimePerClass; //총 비용
    priceArray.push(personalPrice);
  }
  if (form.group == "on") {
    groupPrice.isGroup = true;
    groupPrice.numberOfMembers = form.groupMax;
    groupPrice.numberOfLectures = form.GnumOfClass;
    groupPrice.pricePerHour = form.GpricePerHour; //시간당 비용
    groupPrice.timePerLecture = form.GtimePerClass; //1회당 강의 시간
    groupPrice.totalPrice =
      form.GpricePerHour * form.GnumOfClass * form.GtimePerClass; //총 비용
    priceArray.push(groupPrice);
  }

  return priceArray;
};

const GetLectureSubjectArray = (form) => {
  const subjectArray = form.lectureSubject.filter((data) => data != null);
  return subjectArray;
};

const LectureRegister = async ({ form, num, lecID }) => {
  const data = {
    title: form.title,
    subTitle: form.subtitle,
    content: form.content,
    introduce: form.introduction,
    difficulty: GetLectureLevel(form),
    lecturePrices: GetLecturePriceArray(form),
    lectureSubjects: GetLectureSubjectArray(form),
    systems: GetLectureSystemArray(form),
    thumbnail: form.image,
  };
  console.log("this is axios");

  await axios({
    method: "POST",
    url: "/lectures",
    data: data,
  })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      errormsg = error.response;
      return Promise.reject(errormsg);
    });
  // if (num == 2) {
  //   axios
  //     .put(`/lectures/${lecID}`, data)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // } else {
  //   await axios({
  //     method: "POST",
  //     url: "/lectures",
  //     data: data,
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       return response;
  //     })
  //     .catch((error) => {
  //       errormsg = error.response;
  //       return Promise.reject(errormsg);
  //     });
  // }
};

export default LectureRegister;
