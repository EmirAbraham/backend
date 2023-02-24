const { getUsers } = require("./getUsers.js");
const { getUserDetails } = require("./getUserDetails.js");
const { deleteUser } = require("./deleteUser");
const { updateUser } = require("./updateUser");

module.exports = {
  getUsers,
  getUserDetails,
  deleteUser,
  updateUser,
};
