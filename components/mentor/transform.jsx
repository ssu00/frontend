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
  }
};

export { TransEduLevelToEng, TransEduLevelToKor };
