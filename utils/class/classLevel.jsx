const LevelToEng = (form) => {
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

const LevelToKor = (data) => {
  if (data == "BASIC") return "입문";
  else if (data == "BEGINNER") return "초급";
  else if (data == "INTERMEDIATE") return "중급";
  else if (data == "ADVANCED") return "고급";
};

export { LevelToEng, LevelToKor };
