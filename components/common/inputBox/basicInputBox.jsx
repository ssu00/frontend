const BasicInputBox = ({ type, style, placeholder, onChange, value }) => {
  return (
    <input
      type={type}
      className={style}
      placeholder={placeholder}
      // onChange={(e) => onChange(e.target.value)}
      onChange={onChange}
      value={value}
    />
  );
};

export default BasicInputBox;
