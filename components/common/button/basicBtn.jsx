const BasicBtn = ({ text, onClick, btnStyle, textStyle, disabled }) => {
  return (
    <button
      type="button"
      className={btnStyle}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={textStyle}>{text}</span>
    </button>
  );
};

export default BasicBtn;
