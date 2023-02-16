const { Socialpost, Socialcomment, Userdev} = require('../../../db');



const getPostById = async (id) => {
    const postById = await Socialpost.findByPk(id, {
        include: {
            model: Userdev,
            attributes: ['name' , 'image']
        }
    });
    if(id) {
        const comments = await Socialcomment.findAll({
            where: { socialpostId: id},
            include: {
                model: Userdev,
                attributes: ['name' , 'image']
            }
        })
    const postWithComments = { content: postById.dataValues, comments };
    return postWithComments;
}
}


module.exports = { getPostById };