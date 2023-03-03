// bcryptjs para hashear la password a la DB
const bcryptjs = require('bcryptjs');

const generateRandomPassword = () => {
    const password = Math.random().toString(36).slice(-8);
    const salt = bcryptjs.genSaltSync(10);
    return bcryptjs.hashSync(password, salt);
};

module.exports = { generateRandomPassword }