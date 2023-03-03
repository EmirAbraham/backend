const { Router } = require('express');
const router = Router();

// middlewares
const { authorization } = require('../../middlewares/auth.js');

// validators
const {
    validateGetPostById,
    validateGetPostByUserId,
    validateCreatePost,
    validateLikePost,
    validateUpdatePost,
    validateDeletePost
} = require('../../validators/socialcuak.js');

// controllers
const { 
    getPosts, 
    getPostById, 
    createPost,
    likePost, 
    updatePost, 
    deletePost,
    getPostByUserId
} = require('../../controllers/socialcuak/posts/index.js');


router.get('/', getPosts);

router.get('/:id', authorization, validateGetPostById, getPostById);

router.get('/user/:id', authorization, validateGetPostByUserId, async (req, res) => {
    try {
        const result = await getPostByUserId(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.post('/', authorization, validateCreatePost, createPost);

router.post('/:id/like', authorization, validateLikePost, likePost);

router.put('/:id', authorization, validateUpdatePost, updatePost);

router.delete('/:id', authorization, validateDeletePost, deletePost);

module.exports = router;