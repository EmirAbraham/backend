const { Userdev } = require('../../db.js');
const { Op } = require('sequelize');

const getUsers = async (params) => {
    
    const { name, alpha, nickName, page } = params;

    let where = {active: true};
    let order = [];
    let limit = 10;
    let offset = ((page ? page : 1) - 1) * limit;
    let url = `http://localhost:3001/users?`;
    const currentPage = Number(page) || (offset / limit) + 1;

    if (name) {
        where.name = {[Op.iLike]: `%${name}%`}; 
        url = `${url}name=${name}&`;
    }
    if (nickName) {
        where.nickName = {[Op.iLike]: `${nickName}%`}; 
        url = `${url}nickName=${nickName}&`;
    }
    if (alpha) {
        order.push(['name', `${alpha}`]); 
        url = `${url}alpha=${alpha}&`;
    }

    const results = await Userdev.findAll({
        offset,
        limit,
        where,
        order,
        attributes: [
            'id',
            'name',
            'image',
            /* // 'descriptionShort',
            'email',
            'nickName',
            'birthdate', */
        ]
    });

    const count = await Userdev.count({where});
    const pages = Math.ceil( await count / limit );
    const next = currentPage >= pages ? null : `${url}page=${currentPage+1}`;
    const previus = currentPage <= 1 ? null : `${url}page=${currentPage-1}`;

    return {count, pages, previus, next, results};
}

module.exports = { getUsers };