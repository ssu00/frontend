import axios from "axios";

const GetSubjects = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/subjects")
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

const GetSubjectArray = async (setSubject) => {
  await GetSubjects().then((res) => {
    res.data.forEach((data) => {
      setSubject((prev) => [...prev, data.krSubject]);
    });
  });
};

export { GetSubjects, GetSubjectArray };
