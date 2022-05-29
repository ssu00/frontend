import Api, { METHOD } from "../apiController";
import { LevelToEng } from "../../../utils/class/classLevel";
import { PriceToArray } from "../../../utils/class/classPrice";
import { SystemToArr } from "../../../utils/class/classSystem";
import { FilterSubjectArr } from "../../../utils/class/classSubject";

export const editLecture = async ({ form, token, classID }) => {
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

  return await Api({
    method: METHOD.PUT,
    url: `/lectures/${classID}`,
    headers: { Authorization: token },
    data,
  });
};
