const { Socialpost } = require('../../../db');

const likePost = async (id) => {
    const post = await Socialpost.findByPk(id);
    post.likes += 1;
    await post.save();
}

module.exports = {likePost}