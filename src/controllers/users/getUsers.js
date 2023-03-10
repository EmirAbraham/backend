const { Userdev } = require('../../db.js');
const { Op } = require('sequelize');

const getUsers = async (req, res) => {
    
    try {
        const { name, alpha, nickName, page } = req.query;
    
        let where = {active: true};
        let order = [];
        let limit = 10;
        let offset = ((page ? page : 1) - 1) * limit;
        let url = 'https://backend-production-c946.up.railway.app/users?';
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
                'description'
            ]
        });
    
        const count = await Userdev.count({where});
        const pages = Math.ceil( await count / limit );
        const next = currentPage >= pages ? null : `${url}page=${currentPage+1}`;
        const previus = currentPage <= 1 ? null : `${url}page=${currentPage-1}`;
    
        res.status(200).json({count, pages, previus, next, results});

    } catch (error) {
        res.status(500).json({ errors: [{msg: error.message}] });
    }
}

module.exports = { getUsers };