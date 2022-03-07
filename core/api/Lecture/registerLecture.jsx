import axios from "axios";
const GetLectureLevel = (form) => {
  let level = "";
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
    personalPrice.numberOfLectures = Number(form.PnumOfClass);
    personalPrice.pricePerHour = Number(form.PpricePerHour); //시간당 비용
    personalPrice.timePerLecture = Number(form.PtimePerClass); //1회당 강의 시간
    personalPrice.totalPrice =
      form.PpricePerHour * form.PnumOfClass * form.PtimePerClass; //총 비용
    priceArray.push(personalPrice);
  }
  if (form.group == "on") {
    groupPrice.isGroup = true;
    groupPrice.numberOfMembers = Number(form.groupMax);
    groupPrice.numberOfLectures = Number(form.GnumOfClass);
    groupPrice.pricePerHour = Number(form.GpricePerHour); //시간당 비용
    groupPrice.timePerLecture = Number(form.GtimePerClass); //1회당 강의 시간
    groupPrice.totalPrice =
      form.GpricePerHour * form.GnumOfClass * form.GtimePerClass; //총 비용
    priceArray.push(groupPrice);
  }
  return priceArray;
};

const GetLectureSubjectArray = (form) => {
  const subject_NoNull = form.lectureSubject.filter((data) => data != null);
  const subjectArray = subject_NoNull.map((data, i) => {
    return {
      subjectId: data,
    };
  });
  return subjectArray;
};

const LectureRegister = async ({ form, token }) => {
  const data = {
    title: form.title,
    subTitle: form.subtitle,
    content: form.content,
    introduce: form.introduction,
    difficulty: GetLectureLevel(form),
    lecturePrices: GetLecturePriceArray(form),
    lectureSubjects: GetLectureSubjectArray(form),
    systems: GetLectureSystemArray(form),
    thumbnail:
      "https://www.city.kr/files/attach/images/161/701/416/022/a2c34aa75756074e20552ccbac6894e8.jpg",
  };

  try {
    const res = await axios.post("/lectures", data, {
      headers: { Authorization: token.token },
    });
    return res;
  } catch (err) {
    return err;
  }
};

export default LectureRegister;
