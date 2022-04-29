const TransEduLevelToEng = (eduLevel) => {
  switch (eduLevel) {
    case "초등학교":
      return "ELEMENTARY";
    case "중학교":
      return "MIDDLE";
    case "고등학교":
      return "HIGH";
    case "대학교":
      return "UNIVERSITY";
    case "대학원":
      return "COLLEGE";
  }
};

const TransEduLevelToKor = (eduLevel) => {
  switch (eduLevel) {
    case "ELEMENTARY":
      return "초등학교";
    case "MIDDLE":
      return "중학교";
    case "HIGH":
      return "고등학교";
    case "UNIVERSITY":
      return "대학교";
    case "COLLEGE":
      return "대학원";
  }
};

export { TransEduLevelToEng, TransEduLevelToKor };
