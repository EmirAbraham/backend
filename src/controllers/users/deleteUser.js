const { Userdev } = require("../../db");

const deleteUser = async (id) => {
  await Userdev.destroy({
    where: { id: id },
  });
};

module.exports = { deleteUser };
