import axios from "axios";
export const ClassReg = async ({ form, num, lecID }) => {
  if (num == 2) {
    console.log("it is 2!");
  } else {
    console.log("it is 1!");
  }
  let level = "입문";
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

  let languageArray = [];
  for (let i = 0; i < form.classtype.length; i++) {
    var languageObject = new Object();
    languageObject.krSubject = form.language[i];
    languageObject.learningKind = form.classtype[i];
    languageObject.learningKindId = form.classtypeId[i];
    languageArray.push(languageObject);
  }

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

  let priceArray = [];
  let priceObject = new Object(),
    priceObject2 = new Object();
  if (form.personal == "on") {
    priceObject.groupNumber = 0;
    priceObject.isGroup = false;
    priceObject.pertimeCost = form.PpricePerHour; //시간당 비용
    priceObject.pertimeLecture = form.PtimePerClass; //1회당 강의 시간
    priceObject.totalCost =
      form.PpricePerHour * form.PnumOfTimes * form.PtimePerClass; //총 비용
    priceObject.totalTime = form.PnumOfTimes * form.PtimePerClass; //총 강의 시간
    priceArray.push(priceObject);
  }
  if (form.group == "on") {
    priceObject2.groupNumber = form.groupMax;
    priceObject2.isGroup = true;
    priceObject2.pertimeCost = form.GpricePerHour; //시간당 비용
    priceObject2.pertimeLecture = form.GtimePerClass; //1회당 강의 시간
    priceObject2.totalCost =
      form.GpricePerHour * form.GnumOfTimes * form.GtimePerClass; //총 비용
    priceObject2.totalTime = form.GnumOfTimes * form.GtimePerClass; //총 강의 시간
    priceArray.push(priceObject2);
  }

  const data = {
    content: form.content,
    difficulty: level,
    introduce: form.introduction,
    lecturePrices: priceArray,
    subTitle: form.subheading,
    subjects: languageArray,
    systems: systemArray,
    thumbnailUrl: form.image,
    title: form.maintitle,
  };
  console.log("num:", num);
  console.log("lecID:", lecID);
  console.log(data);

  if (num == 2) {
    axios
      .put(`/lectures/${lecID}`, data)
      .then((response) => {
        const back = document.getElementById("uploadBack");
        const modal = document.getElementById("uploadModal");
        modal ? (modal.style.display = "block") : "";
        back ? (back.style.display = "block") : "";
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    await axios({
      method: "POST",
      url: "/lectures",
      data: data,
    })
      .then((response) => {
        const back = document.getElementById("uploadBack");
        const modal = document.getElementById("uploadModal");
        modal ? (modal.style.display = "block") : "";
        back ? (back.style.display = "block") : "";
        console.log(response);
        return response;
      })
      .catch((error) => {
        errormsg = error.response;
        return Promise.reject(errormsg);
      });
  }
};
