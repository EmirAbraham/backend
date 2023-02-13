const {Router} = require('express');
const router = Router();
const {Socialpost} = require('../../db');
const {getAllPosts} = require('../../controllers/socialcuak/posts/getAllPosts')

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

router.post('/', async (req,res) => {
    const {title, content} = req.body;
    try {
        const newPost = await Socialpost.create({title, content});
        res.status(200).send(newPost)
    } catch (error) {
        res.status(404).send("Post no creado");
    }
})

module.exports = router;