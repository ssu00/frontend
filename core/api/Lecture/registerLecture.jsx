import Api, { METHOD } from "../apiController";
import { LevelToEng } from "../../../utils/class/classLevel";
import { SystemToArr } from "../../../utils/class/classSystem";
import { PriceToArray } from "../../../utils/class/classPrice";
import { FilterSubjectArr } from "../../../utils/class/classSubject";

export const lectureRegister = async ({ form, token }) => {
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

  const res = await Api({
    method: METHOD.POST,
    url: "/lectures",
    headers: { Authorization: token },
    data,
  });
};
