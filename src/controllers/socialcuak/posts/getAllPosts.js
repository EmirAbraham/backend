const {Socialpost, Userdev, Socialcomment} = require('../../../db');

const getAllPosts = async () => {
    const allPosts = await Socialpost.findAll({
        where: {active: true},
        include:[
            {
                model: Userdev,
                attributes: ['name' , 'image']
            },
            {
                model: Socialcomment,
                attributes: ['content', 'likes']
            }
        ],
        order: [['createdAt', 'DESC']] // Ordena los posts según la propiedad "createdAt" en orden descendente
    })
    return allPosts
}

module.exports = {getAllPosts}