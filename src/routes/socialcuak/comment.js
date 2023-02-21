const { Router } = require("express")
const router = Router()
const { Socialcomment, Socialpost } = require('../../db'); // Importar modelos
const { getAllPosts } = require('../../controllers/socialcuak/posts/getAllPosts');
const { getAllComments, createComment } = require('../../controllers/socialcuak/comments/index.js');
const { likeComment } = require("../../controllers/socialcuak/comments/likeComment");


//RUTA POST DE COMENTARIOS

router.post('/:id/comment', async (req, res) => {
  const { id } = req.params;
  const { userId, content } = req.body;
  
  try {
    const result = await createComment(id, userId, content);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/:id/comment/:id/like', async (req, res) => {
  const id = req.params.id;
  try {
      await likeComment(id);
      res.status(200).json({ message: 'Like agregado correctamente.' });
  } catch (error) {
      res.status(404).json({ message: 'Error al agregar el like.' });
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

router.delete('/:id/comment', async (req, res)=> {
  const id = req.params.id;
  const allPosts = await getAllPosts();
  try {
      const deletePost = await allPosts.find(post => post.id == (id));
      await deletePost.destroy();
      res.status(200).send('Comentario eliminado correctamente')
  } catch (error) {
      res.status(404).send('No se pudo eliminar el comentario')
  }
});

router.delete('/:id/comment/:id', async (req, res)=> {
  const id = req.params.id;
  const allComments = await getAllComments();
  try {
      const deleteComment = await allComments.find(comment => comment.id == (id));
      deleteComment.active = false;
      await deleteComment.save();
      res.status(200).send('Comentario eliminado correctamente')
  } catch (error) {
      res.status(404).send('No se pudo eliminar el comentario')
  }
});

module.exports = router;