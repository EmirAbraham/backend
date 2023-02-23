const { Userdev } = require("../../db");

const deleteUser = async (id) => {
  await Userdev.update(
    {
      active: false,
    },
    {
      where: { id: id },
    }
  );
};

module.exports = { deleteUser };