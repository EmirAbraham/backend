const { getUsers } = require("./getUsers.js");
const { getUserDetails } = require("./getUserDetails.js");
const { createUser } = require("./createUser.js");
const { deleteUser } = require("./deleteUser");
const { updateUser } = require("./updateUser");

module.exports = {
  getUsers,
  getUserDetails,
  createUser,
  deleteUser,
  updateUser,
};
