const UserRole = (role) => {
  if (role == "ROLE_MENTOR") {
    return "멘토";
  } else if (role == "ROLE_MENTEE") {
    return "멘티";
  }
};

export default UserRole;
