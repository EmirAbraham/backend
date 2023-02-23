const { getPosts } = require('./getPosts');
const { getPostDetails } = require('./getPostDetails');
const { createPost } = require('./createPost');
const { likePost } = require('./likePost');
const { updatePost } = require('./updatePost');
const { deletePost } = require('./deletePost');

module.exports = { getPosts, getPostDetails, createPost, likePost, updatePost, deletePost }