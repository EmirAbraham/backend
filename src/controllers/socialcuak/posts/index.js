const { getPosts } = require('./getPosts');
const { getPostDetails } = require('./getPostDetails');
const { createPost } = require('./createPost');
const { likePost } = require('./likePost');
const { updatePost } = require('./updatePost');
const { deletePost } = require('./deletePost');
const { getPostByUserId } = require('./getPostByUserId');

module.exports = { getPosts, getPostDetails, createPost, likePost, updatePost, deletePost, getPostByUserId }