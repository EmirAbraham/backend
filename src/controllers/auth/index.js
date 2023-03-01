const { logInController } = require('./loginController.js');
const { signUpController } = require('./signUpController.js');
const { verifyUser } = require('./verifyUser.js');

module.exports = { 
    logInController,
    signUpController,
    verifyUser, 
};