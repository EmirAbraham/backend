const {Router} = require('express');
const router = Router();
const {Socialpost} = require('../../db');
const {getAllPosts} = require('../../controllers/socialcuak/posts/getAllPosts')

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
    const allPosts = await getAllPosts();
    try {
        if(id) {
            const postId = await allPosts.find(post => post.id == (id));
            postId ? res.status(200).send(postId) : res.status(404).json("Post no encontrado")
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
})


// ruta POST de los posts

router.post('/', async (req,res) => {
    const {content} = req.body;
    try {
        const newPost = await Socialpost.create({content});
        res.status(200).send(newPost)
    } catch (error) {
        res.status(404).send("Post no creado");
    }
})

// rutas PUT 

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const {content} = req.body;
    const allPosts = await getAllPosts();
    try {
        const modifyPost = await allPosts.find(post => post.id == (id));
        content && modifyPost.set({content: content});
        await modifyPost.save();
        res.status(200).send('Posteo modificado exitosamente.')
    } catch (error) {
        res.status(404).send('El posteo no pudo ser modificado')
    }
})

// rutas DELETE

router.delete('/:id', async (req, res)=> {
    const id = req.params.id;
    const allPosts = await getAllPosts();
    try {
        const deletePost = await allPosts.find(post => post.id == (id));
        await deletePost.destroy();
        res.status(200).send('Post eliminado correctamente')
    } catch (error) {
        res.status(404).send('No se pudo eliminar el post')
    }
})

module.exports = router;