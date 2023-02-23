const { Userdev, Socialpost, Socialcomment } = require('../../../db');

const getPosts = async (params) => {
    
    const { page } = params;

    let limit = 10;
    let offset = ((page ? page : 1) - 1) * limit;
    
    const results = await Socialpost.findAll({
        where: {active: true},
        order: [['createdAt', 'DESC']],
        offset,
        limit,
        include:[
            {
                model: Userdev,
                attributes: ['name' , 'image'],
            },
            {
                model: Socialcomment,
                attributes: ['content', 'likes'],
                where: {active: true},
                order: [['likes', 'DESC']],
                required: false,
                include: [
                    {
                        model: Userdev,
                        attributes: ['name', 'image'],
                    }
                ],
            },
        ],
    })

    return results;
}

module.exports = { getPosts }