const { Socialpost, Socialcomment } = require('../../../db');



const getPostById = async (id) => {
    const postById = await Socialpost.findByPk(id);
    if(id) {
        const comments = await Socialcomment.findAll({
            where: { socialpostId: id}
        })
    const postWithComments = { content: postById.dataValues, comments };
    return postWithComments;
}
}


module.exports = { getPostById };