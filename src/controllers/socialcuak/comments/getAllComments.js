require('dotenv').config();
const {Socialcomment} = require('../../../db');

const getAllComments = async () => {
    const allComments = await Socialcomment.findAll()
    return allComments
}

module.exports = { getAllComments }