const {Socialpost, Userdev, Socialcomment} = require('../../../db');

const getAllPosts = async () => {
    const allPosts = await Socialpost.findAll({
        include: {
            model: Userdev,
            attributes: ['name' , 'image'],
            model: Socialcomment,
            attributes: ['content', 'likes']
        }
    })
    return allPosts
}

module.exports = {getAllPosts}