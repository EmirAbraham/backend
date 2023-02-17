const { getAllPosts } = require('./getAllPosts');
const { getPostById } = require('./getPostById');
const { createPost } = require('./createPost');
const { updatePost } = require('./updatePost');
const { deletePost } = require('./deletePost');

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost }