import GetSubjects from "../../core/api/Lecture/getSubjects";
const SubjectArrToID = async (subjects) => {
  const subjectID = [];
  const subjectInfo = await GetSubjects();
  subjects.forEach((myData) => {
    subjectInfo.forEach((originData) => {
      if (myData.krSubject == originData.krSubject) {
        subjectID.push(originData.subjectId);
      }
    });
  });

  return subjectID;
};

const FilterSubjectArr = (form) => {
  const subject_NoNull = form.lectureSubject.filter((data) => data != null);
  const subjectArray = subject_NoNull.map((data, i) => {
    return {
      subjectId: data,
    };
  });
  return subjectArray;
};

export { SubjectArrToID, FilterSubjectArr };
