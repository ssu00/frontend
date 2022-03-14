import axios from "axios";
import { LevelToEng } from "../../../utils/class/classLevel";
import { PriceToArray } from "../../../utils/class/classPrice";
import { SystemToArr } from "../../../utils/class/classSystem";
import { FilterSubjectArr } from "../../../utils/class/classSubject";

const EditLecture = async ({ form, token, classID }) => {
  const data = {
    title: form.title,
    subTitle: form.subtitle,
    content: form.content,
    introduce: form.introduction,
    difficulty: LevelToEng(form),
    lecturePrices: PriceToArray(form),
    lectureSubjects: FilterSubjectArr(form),
    systems: SystemToArr(form),
    thumbnail:
      "https://www.city.kr/files/attach/images/161/701/416/022/a2c34aa75756074e20552ccbac6894e8.jpg",
  };

  try {
    const res = await axios.put(`/lectures/${classID}`, data, {
      headers: { Authorization: token },
    });
    return res;
  } catch (err) {
    return err;
  }
};

export default EditLecture;
