const { Socialpost } = require('../../../db');

const createPost = async (content) => {
    const newPost = await Socialpost.create({content});
    return newPost
}

module.exports = {createPost}

