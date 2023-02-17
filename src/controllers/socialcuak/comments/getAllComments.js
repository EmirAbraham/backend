require('dotenv').config();
const {Socialcomment} = require('../../../db');

const getAllComments = async () => {
    const allComments = await Socialcomment.findAll({
        include: {
            model: Userdev,
            attributes: ['name' , 'image']
        }
    })
    return allComments
}

module.exports = { getAllComments }