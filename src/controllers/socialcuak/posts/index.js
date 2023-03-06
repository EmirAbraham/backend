const { getPosts } = require('./getPosts.js');
const { getPostById } = require('./getPostById.js');
const { createPost } = require('./createPost.js');
const { likePost } = require('./likePost.js');
const { updatePost } = require('./updatePost.js');
const { deletePost } = require('./deletePost.js');
const { getPostByUserId } = require('./getPostByUserId.js');

module.exports = { getPosts, getPostById, createPost, likePost, updatePost, deletePost, getPostByUserId }