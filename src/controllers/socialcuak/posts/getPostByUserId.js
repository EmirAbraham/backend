const { Userdev, Socialpost, Socialcomment } = require('../../../db');

const getPostByUserId = async (req) => {

    const { page } = req.query;
    const { id } = req.params
    let where = {
        active: true,
        userdevId: id
    };
    let limit = 10;
    let offset = ((page ? page : 1) - 1) * limit;
    let url = `https://backend-production-c946.up.railway.app/socialcuak/user/${id}?`;
    const currentPage = Number(page) || (offset / limit) + 1;
    
    const results = await Userdev.findByPk(req.params.id, {
        attributes: {
            exclude: ['password', 'active','email','birthdate','description','about','skills','status']
        }, 
        include: [
            {
                model: Socialpost,
                where: {active: true},
                order: [['createdAt', 'DESC']],
                required: false,
                attributes:['id','content','likes','active','createdAt','updatedAt'],
                limit,
                offset
            },
        ],
        where
    });
    const count = await Socialpost.count({where});
    const pages = Math.ceil( await count / limit );
    const next = currentPage >= pages ? null : `${url}page=${currentPage+1}`;
    const previus = currentPage <= 1 ? null : `${url}page=${currentPage-1}`;

    return {count, pages, previus, next, results};
}

module.exports = { getPostByUserId }