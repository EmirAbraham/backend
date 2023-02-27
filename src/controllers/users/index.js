const { getUsers } = require("./getUsers.js");
const { getUserDetails } = require("./getUserDetails.js");
const { deleteUser } = require("./deleteUser");
const { updateUser } = require("./updateUser");
const { updateStatus } = require("./updateStatus");
const { getAdmins } = require('./getAdmins.js');

module.exports = {
  getUsers,
  getUserDetails,
  deleteUser,
  updateUser,
  updateStatus,
  getAdmins,
};
