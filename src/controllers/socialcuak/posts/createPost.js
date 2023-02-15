const { Socialpost, Userdev } = require('../../../db');

const createPost = async (content, userId) => {
    
    if (!userId) throw new Error(`userId is required`);
    if (!content) throw new Error(`content is required`);
    
    const user = await Userdev.findByPk(userId, {attributes: ['active', 'name']});
    if (!user.dataValues.active) throw new Error(`The user ${user.name} was deleted`);

    const newPost = await Socialpost.create({content, userdevId: userId});
    return newPost
}

module.exports = { createPost }