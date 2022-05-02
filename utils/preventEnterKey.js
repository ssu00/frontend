const PreventEnterKey = (preventItem, keydown, setKeyDown) => {
  preventItem?.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      setKeyDown(keydown + 1);
    }
  });
};

export default PreventEnterKey;
