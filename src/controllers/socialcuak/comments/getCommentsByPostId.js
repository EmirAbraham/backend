const { Userdev, Socialcomment } = require('../../../db');

const getCommentsByPostId = async (req) => {

    const { page } = req.query;
    const { id } = req.params;
    let where = {
        active: true,
        socialpostId: id
    };
    let limit = 10;
    let offset = ((page ? page : 1) - 1) * limit;
    let url = `https://backend-production-c946.up.railway.app/socialcuak/${id}/comments?`;
    const currentPage = Number(page) || (offset / limit) + 1;

    const results = await Socialcomment.findAll({
        where,
        order: [['createdAt', 'DESC']],
        attributes: ['id', 'content', 'likes', 'active', 'createdAt', 'updatedAt'],
        include: {
            model: Userdev,
            attributes: ['id', 'name', 'image'],
        },
        limit,
        offset,
    });
    const count = await Socialcomment.count({ where });
    const pages = Math.ceil(await count / limit);
    const next = currentPage >= pages ? null : `${url}page=${currentPage + 1}`;
    const previus = currentPage <= 1 ? null : `${url}page=${currentPage - 1}`;

    return { count, pages, previus, next, results };
}

module.exports = { getCommentsByPostId }