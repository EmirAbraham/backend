const { Userdev, Socialpost, Socialcomment } = require('../../../db');

const updatePost = async (req, res) => {

    try {
        const { id } = req.params;
        const { content } = req.body;
        const userId = req.user.id;

        const post = await Socialpost.findByPk(id, {
            include: [
                {
                    model: Userdev,
                    attributes: ['name', 'image', 'active']
                },
                {
                    model: Socialcomment,
                    attributes: ['content', 'likes', 'active', 'createdAt'],
                    order: [['likes', 'DESC']],
                    where: {active: true},
                    limit: 2,
                    required: false,
                    include: {
                        model: Userdev,
                        attributes: ['name', 'image']
                    },
                }
            ]
        });

        if (!post || !post.dataValues.active) {
            return res.status(404).json({ errors: [{msg: "La publicación no existe o fue eliminada"}]});
        }
        if (!post.dataValues.userdev.dataValues.active) {
            return res.status(404).json({ errors: [{msg: "El autor de la publicación no existe o fue eliminado"}]});
        }
        if (post.dataValues.userdevId !== userId) {
            return res.status(401).json({ errors: [{msg: "El usuario no es el autor de la publicación"}]});
        }
        
        post.content = content;
        const newPost = await post.save();

        return res.status(200).json(newPost);

    } catch (error) {
        res.status(500).json({ errors: [{msg: error.message}] });
    }
}

module.exports = { updatePost }