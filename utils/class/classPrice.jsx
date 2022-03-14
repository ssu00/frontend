const PriceToArray = (form) => {
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

const PriceToObj = (priceArr) => {
  let priceObj = {
    PpricePerHour: 0,
    PtimePerClass: 0,
    PnumOfClass: 0,
    GpricePerHour: 0,
    GtimePerClass: 0,
    GnumOfClass: 0,
    personal: "off",
    group: "off",
    groupMax: 0,
  };

  priceArr.forEach((data) => {
    if (data.isGroup) {
      priceObj.GpricePerHour = data.pricePerHour;
      priceObj.GtimePerClass = data.timePerLecture;
      priceObj.GnumOfClass = data.numberOfLectures;
      priceObj.group = "on";
      priceObj.groupMax = data.numberOfMembers;
    } else {
      priceObj.PpricePerHour = data.pricePerHour;
      priceObj.PtimePerClass = data.timePerLecture;
      priceObj.PnumOfClass = data.numberOfLectures;
      priceObj.personal = "on";
    }
  });

  return priceObj;
};

export { PriceToArray, PriceToObj };
