const BasicBtn = ({ text, onClick, btnStyle, textStyle, disable }) => {
  return (
    <button
      type="button"
      className={btnStyle}
      onClick={onClick}
      disable={disable}
    >
      <span className={textStyle}>{text}</span>
    </button>
  );
};

export default BasicBtn;
