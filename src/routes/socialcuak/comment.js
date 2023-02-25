const { Router } = require("express")
const router = Router()
const { Socialcomment, Socialpost } = require('../../db'); // Importar modelos
const { getPosts } = require('../../controllers/socialcuak/posts/index.js');
const { getAllComments, createComment, likeComment, deleteComment } = require('../../controllers/socialcuak/comments/index.js');
const { authorization } = require('../../middlewares/auth.js')


//RUTA POST DE COMENTARIOS

router.post('/:id/comment',
  authorization, 
  async (req, res) => {
  const { id } = req.params;
  const { userId, content } = req.body;
  
  try {
    const result = await createComment(id, userId, content);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/:id/comment/:id/like',
  authorization, 
  async (req, res) => {
  const id = req.params.id;
  try {
      await likeComment(id);
      res.status(200).json({ message: 'Like agregado correctamente.' });
  } catch (error) {
      res.status(404).json({ message: 'Error al agregar el like.' });
  }
});


// RUTA PUT DE COMENTARIOS

router.put('/:id/comment',
  authorization,
  async (req, res) => {
    const id = req.params.id;
    const { content } = req.body;
    const allPosts = await getPosts();
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

router.delete('/:id/comment/:id',
  authorization,
  async (req, res)=> {
  deleteComment(req, res);
});

module.exports = router;