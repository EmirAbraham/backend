const { Userdev } = require('../../db.js');

const getUserDetails = async (id) => {
    
    const result = await Userdev.findByPk( id );

    return result;
}

module.exports = { getUserDetails };