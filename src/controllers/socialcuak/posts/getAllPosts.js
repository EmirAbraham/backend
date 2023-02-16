const {Socialpost, Userdev} = require('../../../db');

const getAllPosts = async () => {
    const allPosts = await Socialpost.findAll({
        include: {
            model: Userdev,
            attributes: ['name' , 'image']
        }
    })
    return allPosts
}

module.exports = {getAllPosts}