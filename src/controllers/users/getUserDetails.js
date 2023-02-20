const { Userdev, Socialpost } = require('../../db.js');

const getUserDetails = async (id) => {
    
    const user = await Userdev.findByPk(id);

    const posts = await Socialpost.findAll({
        where: {
            userdevId: id,
            active: true
        },
        order: [['createdAt', 'DESC']]
    });

    const result = { ...user.dataValues, socialposts: posts.map(el => el.dataValues)}

    return result;
}

module.exports = { getUserDetails };