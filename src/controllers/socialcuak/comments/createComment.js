const { Socialcomment, Socialpost, Userdev } = require('../../../db.js');

const createComment = async (postId, userId, content) => {
    
    if (!postId) throw new Error(`id is required`);
    if (!userId) throw new Error(`userId is required`);
    if (!content) throw new Error(`content is required`);

    const user = await Userdev.findByPk(userId, {attributes: ['active', 'name']});
    const post = await Socialpost.findByPk(postId, {attributes: ['active', 'id']});

    if (!user.dataValues.active) throw new Error(`The post's owner ${user.name} is a deleted user`);
    if (!post.dataValues.active) throw new Error(`This post: ${post.id} was deleted`);

    const newComment = await Socialcomment.create({
        content,
        socialpostId: postId,
        userdevId: userId
    });

    return newComment;
}

module.exports = { createComment };