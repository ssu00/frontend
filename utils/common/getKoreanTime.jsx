const GetKoreanTime = (date) => {
  const offset = new Date().getTimezoneOffset() * 60000;
  const conversion = new Date(date - offset);
  return conversion;
};

export default GetKoreanTime;
