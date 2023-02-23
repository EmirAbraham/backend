const { Router } = require('express');
const router = Router();

// middlewares
const { authorization } = require('../../middlewares/auth.js');

// validators
const {
    validateGetPostById,
    validateCreatePost,
    validateLikePost,
    validateUpdatePost,
    validateDeletePost
} = require('../../validators/socialcuak.js');

// controllers
const { 
    getAllPosts, 
    getPostById, 
    createPost, 
    updatePost, 
    deletePost 
} = require('../../controllers/socialcuak/posts/index.js');


// rutas GET de los posts

router.get('/', async (req, res) => {
    const allPosts = await getAllPosts();
    try {
        res.status(200).send(allPosts);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.get('/:id',
    authorization,
    validateGetPostById,
    async (req, res) => {
    const { id } = req.params;
    const postById = await getPostById(id);
    try {
        res.status(200).send(postById)
    } catch (error) {
        res.status(404).send(error.message)
    }
})


// rutas POST de los posts
router.post('/', 
    authorization,
    validateCreatePost, 
    async (req,res) => {
    const { content } = req.body;
    const { id } = req.user;
    try {
        //REFACTORIZAR: ENVIARLE TODO EL REQUEST
        const newPost = await createPost(content, id)
        res.status(200).send(newPost)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
})

router.post('/:id/like', 
    authorization,
    validateLikePost,
    async (req, res) => {
    const { id } = req.params;
    try {
        await likePost(id);
        res.status(200).json({ message: 'Like agregado correctamente.' });
    } catch (error) {
        res.status(404).json({ message: 'Error al agregar el like.' });
    }
});

// ruta PUT 
router.put('/:id', 
    authorization,
    validateUpdatePost,
    async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    await updatePost(id, content);
    try {

        res.status(200).send('Posteo modificado exitosamente.')
    } catch (error) {
        res.status(404).send('El posteo no pudo ser modificado')
    }
})

// ruta DELETE
router.delete('/:id', 
    authorization,
    validateDeletePost,
    async (req, res) => {
    const id = req.params.id;
    await deletePost(id);
    try {
        res.status(200).send('Post eliminado correctamente')
    } catch (error) {
        res.status(404).send('No se pudo eliminar el post')
    }
})

module.exports = router;