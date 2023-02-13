const { Userdev } = require('../../db.js');
const { Op } = require('sequelize');

const getUsers = async (payload) => {
    
    /* const { } = payload; */
    const result = await Userdev.findAll({
        limit: 10,
        offset: 1,
        attributes: [
            'id',
            'name',
            'image'
        ]
    });

    return result;
}

module.exports = { getUsers };