const BasicTextAreaBox = ({ type, style, placeholder, onChange, value }) => {
  return (
    <textarea
      type={type}
      className={style}
      placeholder={placeholder}
      // onChange={(e) => onChange(e.target.value)}
      onChange={onChange}
      value={value}
    />
  );
};

export default BasicTextAreaBox;
