const { Userdev } = require('../../db.js');


const getUserDetails = async (id) => {
    
    const result = await Userdev.findByPK( id );

    return result;
}

module.exports = { getUserDetails };