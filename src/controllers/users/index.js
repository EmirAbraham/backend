const { getUsers } = require('./getUsers.js');
const { getUserDetails } = require('./getUserDetails.js');
const { createUser } = require('./createUser.js');
const { deleteUser } = require("./deleteUser")

module.exports = {
    getUsers,
    getUserDetails,
    createUser,
    deleteUser
}