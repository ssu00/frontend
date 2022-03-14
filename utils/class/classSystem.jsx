const SystemToArr = (form) => {
  let systemArray = [];
  if (form.online == "on") {
    systemArray.push("ONLINE");
  }
  if (form.offline == "on") {
    systemArray.push("OFFLINE");
  }
  if (form.discuss == "on") {
    systemArray.push("DISCUSS");
  }
  return systemArray;
};

const SystemToObj = (systemArr) => {
  let systemObj = { online: "off", offline: "off", discuss: "off" };
  systemArr.forEach((data) => {
    if (data.type == "ONLINE") {
      systemObj.online = "on";
    } else if (data.type == "OFFLINE") {
      systemObj.offline = "on";
    } else if (data.type == "DISCUSS") {
      systemObj.discuss = "on";
    }
  });
  return systemObj;
};

export { SystemToArr, SystemToObj };
