const { getAllComments } = require('./getAllComments.js');
const { createComment } = require('./createComment.js');
const { likeComment } = require('./likeComment.js');
const { deleteComment } = require('./deleteComment.js');
const { getCommentsByPostId } = require('./getCommentsByPostId.js');

module.exports = {
    getAllComments,
    createComment,
    likeComment,
    deleteComment,
    getCommentsByPostId
}