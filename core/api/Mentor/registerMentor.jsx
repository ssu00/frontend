const MentorRegister = async ({ bio, career, education, token }) => {
  try {
    const res = await axios.post("/mentors", {
      bio: bio,
      careers: [career],
      educations: [education],
    });
    return res;
  } catch (err) {
    return err;
  }
};

export default MentorRegister;
