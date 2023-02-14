const { Router } = require("express")
const router = Router()
const { Socialcomment, Socialpost } = require('../../db'); // Importar modelos
const { getAllPosts } = require('../../controllers/socialcuak/posts/getAllPosts')

router.post('/:id/comment', async (req, res) => {
  const id = req.params.id;
  const allPosts = await getAllPosts();
  const postId = await allPosts.find(post => post.id == (id));
  const { content } = req.body;
  try {
    if(!postId) {
      return res.status(404).send('No se encontró el post');
    }
    const newComment = await Socialcomment.create({
      content, 
      socialpostId: id,
      })
    res.status(200).send(newComment);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;