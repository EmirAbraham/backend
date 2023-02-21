const { getAllComments } = require('./getAllComments.js');
const { createComment } = require('./createComment.js');
const { likeComment } = require('./likeComment.js');

module.exports = {
    getAllComments,
    createComment,
    likeComment
}