import axios from "axios";
import { LevelToEng } from "../../../utils/class/classLevel";
import { SystemToArr } from "../../../utils/class/classSystem";
import { PriceToArray } from "../../../utils/class/classPrice";
import { FilterSubjectArr } from "../../../utils/class/classSubject";

const LectureRegister = async ({ form, token }) => {
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
    const res = await axios.post("/lectures", data, {
      headers: { Authorization: token },
    });
    return res;
  } catch (err) {
    return err;
  }
};

export default LectureRegister;
