const { Userdev, Socialpost, Socialcomment } = require('../../../db');

const getPosts = async (params) => {
    
    const { page } = params;
    let where = {active: true};
    let limit = 10;
    let offset = ((page ? page : 1) - 1) * limit;
    let url = 'https://backend-production-c946.up.railway.app/socialcuak?';
    const currentPage = Number(page) || (offset / limit) + 1;
    
    const results = await Socialpost.findAll({
        attributes: {
            exclude: ['userdevId']
        },
        where: {active: true},
        order: [['createdAt', 'DESC']],
        offset,
        limit,
        include:[
            {
                model: Userdev,
                attributes: [
                    'name' , 'image', "id"],
            },
        ],
    })
    const count = await Socialpost.count({where});
    const pages = Math.ceil( await count / limit );
    const next = currentPage >= pages ? null : `${url}page=${currentPage+1}`;
    const previus = currentPage <= 1 ? null : `${url}page=${currentPage-1}`;

    return {count, pages, previus, next, results};
}

module.exports = { getPosts }