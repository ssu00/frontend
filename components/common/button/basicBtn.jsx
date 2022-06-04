const BasicBtn = ({ id, text, onClick, btnStyle, textStyle, disabled }) => {
  return (
    <button
      type="button"
      className={btnStyle}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      <span className={textStyle}>{text}</span>
    </button>
  );
};

export default BasicBtn;
