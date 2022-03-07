const ChangeObject = (setValue, propName, e) => {
  setValue((prev) => ({ ...prev, [propName]: e.target.value }));
};

export default ChangeObject;
