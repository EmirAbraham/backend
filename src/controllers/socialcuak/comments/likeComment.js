const { Socialcomment } = require('../../../db');

const likeComment = async (id) => {
    const comment = await Socialcomment.findByPk(id);
    comment.likes += 1;
    await comment.save();
}

module.exports = {likeComment}