const { Router } = require('express');
const router = Router();

// middlewares
const { authorization } = require('../../middlewares/auth.js');

// validators
const {
    validateGetPostDetails,
    validateCreatePost,
    validateLikePost,
    validateUpdatePost,
    validateDeletePost
} = require('../../validators/socialcuak.js');

// controllers
const { 
    getPosts, 
    getPostDetails, 
    createPost,
    likePost, 
    updatePost, 
    deletePost,
    getPostByUserId
} = require('../../controllers/socialcuak/posts/index.js');

router.get('/', async (req, res) => {
    try {
        const result = await getPosts(req.query);
        res.status(200).json(result);;
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.get('/:id', authorization, validateGetPostDetails, getPostDetails);

router.get('/user/:id', async (req, res) => {
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