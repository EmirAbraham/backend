const { Router } = require("express")
const router = Router()
const { Socialcomment, Socialpost } = require('../../db'); // Importar modelos
const { getAllPosts } = require('../../controllers/socialcuak/posts/getAllPosts');
const { getAllComments } = require('../../controllers/socialcuak/comments/getAllComments');


//RUTA POST DE COMENTARIOS

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


// RUTA PUT DE COMENTARIOS

router.put('/:id/comment', async (req, res) => {
    const id = req.params.id;
    const { content } = req.body;
    const allPosts = await getAllPosts();
    try {
      const modifyPost = await allPosts.find(post => post.id == (id));
        content && modifyPost.set({content: content});
        await modifyPost.save();
        res.status(200).send('Comentario modificado exitosamente.')
    } catch (error) {
        res.status(404).send('El comentario no pudo ser modificado')
    }
});


// RUTA DELETE DE COMENTARIOS

router.delete('/:id/comment/:id', async (req, res)=> {
  const id = req.params.id;
  const allPosts = await getAllPosts();
  const allComments = await getAllComments();
  try {
      const findPost = await allPosts.find(post => post.id == (id));
      const deleteComment = await allComments.find(comment => comment.id == (id));
      deleteComment.active = false;
      await deleteComment.save();
      res.status(200).send('Comentario eliminado correctamente')
  } catch (error) {
      res.status(404).send('No se pudo eliminar el comentario')
  }
});
module.exports = router;