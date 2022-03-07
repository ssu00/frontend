const UserRole = (role) => {
  if (role == "MENTOR") {
    return "멘토";
  } else if (role == "MENTEE") {
    return "멘티";
  }
};

export default UserRole;
