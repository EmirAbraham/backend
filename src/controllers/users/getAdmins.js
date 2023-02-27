const { Userdev } = require('../../db.js');
const { Op } = require('sequelize');

const getAdmins = async (params) => {
    
    const { name, alpha, nickName } = params;

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
        attributes: [
            'id',
            'name',
            'nickName',
            'status',
            'email',
            'active'
        ]
    });

    return {results};
}

module.exports = { getAdmins };