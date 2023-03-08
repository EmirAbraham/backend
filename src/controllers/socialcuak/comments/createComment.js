const { Socialcomment, Socialpost, Userdev } = require('../../../db.js');
const { transporter, send_mail } = require('../../../mailer/send.js');
const { getMailNewComment } = require('../../../mailer/html_mails/newComment.js');

const createComment = async (postId, userId, content) => {
    
    if (!postId) throw new Error(`id is required`);
    if (!userId) throw new Error(`userId is required`);
    if (!content) throw new Error(`content is required`);

    const user = await Userdev.findByPk(userId, {attributes: ['active', 'name']});
    const post = await Socialpost.findByPk(postId, {attributes: ['active', 'id', 'userdevId']});

    if (!user.dataValues.active) throw new Error(`The post's owner ${user.name} is a deleted user`);
    if (!post.dataValues.active) throw new Error(`This post: ${post.id} was deleted`);

    const newComment = await Socialcomment.create({
        content,
        socialpostId: postId,
        userdevId: userId
    });
    
    const postOwner = await Userdev.findByPk(post.dataValues.userdevId, {attributes: ['name', 'email']});

    if (postOwner && postOwner.dataValues.email) {
        
        const html = getMailNewComment(postOwner.dataValues.name, user.name, content);
        const mailOptions = {
            from: process.env.GMAIL,
            to: postOwner.dataValues.email,
            subject: `¡Nuevo comentario en tu publicación en codeCuak!`,
            html,
        };

        await send_mail(mailOptions);
    }

    return newComment;
}

module.exports = { createComment };