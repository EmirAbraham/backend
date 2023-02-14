const { Userdev, Socialpost } = require('../../db.js');

const getUserDetails = async (id) => {
    
    const result = await Userdev.findByPk( id, {
        attributes: {
            exclude: ['active'],
        },
        include: {
            model: Socialpost,
        }
    } );

    return result;
}

module.exports = { getUserDetails };