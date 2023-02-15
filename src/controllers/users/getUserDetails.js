const { Userdev, Socialpost } = require('../../db.js');

const getUserDetails = async (id) => {
    
    const result = await Userdev.findByPk( id, {
        attributes: {
            exclude: ['active'],
        },
        include: {
            model: Socialpost,
            where: { active: true },
            attributes: { exclude: ['active'] }
        },
        order: [[{ model: Socialpost }, 'createdAt', 'DESC']],
    } );

    return result;
}

module.exports = { getUserDetails };