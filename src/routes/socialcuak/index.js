const { Router } = require('express');
const router = Router();

// middlewares
const { authorization } = require('../../middlewares/auth.js');
const { check } = require('express-validator');

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

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const postById = await getPostById(id);
    try {
        res.status(200).send(postById)
    } catch (error) {
        res.status(404).send(error.message)
    }
})


// ruta POST de los posts
router.post('/', authorization, async (req,res) => {
    const { content } = req.body;
    const { id } = req.user;
    try {
        const newPost = await createPost(content, id)
        res.status(200).send(newPost)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
})

router.post('/:id/like', async (req, res) => {
    const id = req.params.id;
    try {
        await likePost(id);
        res.status(200).json({ message: 'Like agregado correctamente.' });
    } catch (error) {
        res.status(404).json({ message: 'Error al agregar el like.' });
    }
});

// rutas PUT 
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { content } = req.body;
    await updatePost(id, content);
    try {

        res.status(200).send('Posteo modificado exitosamente.')
    } catch (error) {
        res.status(404).send('El posteo no pudo ser modificado')
    }
})

// rutas DELETE

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await deletePost(id);
    try {
        res.status(200).send('Post eliminado correctamente')
    } catch (error) {
        res.status(404).send('No se pudo eliminar el post')
    }
})

module.exports = router;