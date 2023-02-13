const axios = require('axios');
require('dotenv').config();
const {Socialpost} = require('../../../db');

const getAllPosts = async () => {
    const allPosts = await Socialpost.findAll()
    return allPosts
}

module.exports = {getAllPosts}