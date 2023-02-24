const { getUsers } = require("./getUsers.js");
const { getUserDetails } = require("./getUserDetails.js");
const { createUser } = require("./createUser.js");
const { deleteUser } = require("./deleteUser");
const { updateUser } = require("./updateUser");
const { updateStatus } = require("./updateStatus");

module.exports = {
  getUsers,
  getUserDetails,
  createUser,
  deleteUser,
  updateUser,
  updateStatus,
};
