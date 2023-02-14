const { Userdev } = require("../../db");

const deleteUser = async (id, params) => {
  await Userdev.update(
    {
      active: params.active,
    },
    {
      where: { id: id },
    }
  );
};

module.exports = { deleteUser };
