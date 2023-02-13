const { Userdev } = require("../../db.js");

const newUser = async (params) => {
  const user = await Userdev.create({
    name: params.name,
    email: params.email,
    nickName: params.nickName,
    image: params.image,
  });
  return user;
};

module.exports = { newUser };
