const PreventDuplicateSubmit = (preventItem, keydown, setKeyDown) => {
  preventItem?.addEventListener("click", function (e) {
    setKeyDown(keydown + 1);
  });
};

export default PreventDuplicateSubmit;
