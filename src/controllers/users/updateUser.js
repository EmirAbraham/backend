const { Userdev } = require("../../db");

const updateUser = async (id, params) => {
  await Userdev.update(
    {
      name: params.name,
      email: params.email,
      nickName: params.nickName,
      birthdate: params.birthdate,
      image: params.image,
      active: params.active,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

module.exports = { updateUser };
