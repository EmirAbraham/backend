const {Router} = require('express');
const router = Router();
const {getAllPosts} = require('../../controllers/socialcuak/posts/getAllPosts')
const {getPostById} = require('../../controllers/socialcuak/posts/getPostById')
const {createPost} = require('../../controllers/socialcuak/posts/createPost')
const {updatePost} = require('../../controllers/socialcuak/posts/updatePost')
const {deletePost} = require('../../controllers/socialcuak/posts/deletePost')

// rutas GET de los posts

router.get('/', async (req,res)=> {
    const allPosts = await getAllPosts();
    try {
        res.status(200).send(allPosts);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.get('/:id', async (req,res) => {
    const id = req.params.id;
    const postById = await getPostById(id);
    try {
        res.status(200).send(postById)
    } catch (error) {
        res.status(404).send(error.message)
    }
})


// ruta POST de los posts

router.post('/', async (req,res) => {
    const {content, userId} = req.body;
    try {
        const newPost = await createPost(content, userId)
        res.status(200).send(newPost)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
})

// rutas PUT 

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const {content} = req.body;
    await updatePost(id, content);
    try {

        res.status(200).send('Posteo modificado exitosamente.')
    } catch (error) {
        res.status(404).send('El posteo no pudo ser modificado')
    }
})

// rutas DELETE

router.delete('/:id', async (req, res)=> {
    const id = req.params.id;
    await deletePost(id);
    try {
        res.status(200).send('Post eliminado correctamente')
    } catch (error) {
        res.status(404).send('No se pudo eliminar el post')
    }
})

module.exports = router;