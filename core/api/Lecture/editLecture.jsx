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
    thumbnail: form.image,
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
