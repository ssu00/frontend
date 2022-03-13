const SetBirthYear = () => {
  const birthYear = [];
  for (let i = 2002; i >= 1921; i--) {
    birthYear.push(i);
  }
  return birthYear;
};

export default SetBirthYear;
