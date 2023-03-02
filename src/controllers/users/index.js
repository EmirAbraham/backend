const { getUsers } = require("./getUsers.js");
const { getUserById } = require("./getUserById.js");
const { deleteUser } = require("./deleteUser");
const { updateUser } = require("./updateUser");
const { updateStatus } = require("./updateStatus");
const { getAdmins } = require('./getAdmins.js');

module.exports = {
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
  updateStatus,
  getAdmins,
};
