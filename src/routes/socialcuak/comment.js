const express = require('express');
const router = express.Router();
const { SocialComment, SocialPost } = require('../../db'); // Importar modelos de Sequelize

router.post('/:id/comments', async (req, res) => {
  try {
    const post = await SocialPost.findByPk(req.params.id);
    if (!post) {
      return res.status(404).send('No se encontró el post');
    }

    const { content } = req.body;
    const newComment = await SocialComment.create({content})

    res.send(newComment);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;