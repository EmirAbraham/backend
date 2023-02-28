const { Userdev, Socialpost, Socialcomment } = require('../../db.js');

const getUserDetails = async (id) => {
    
    const user = await Userdev.findByPk(id, {
        attributes: {
            exclude: ['password', 'active']
        }, 
    });

    return user;
}

module.exports = { getUserDetails };