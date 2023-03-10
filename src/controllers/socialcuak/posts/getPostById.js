const { Userdev, Socialpost, Socialcomment } = require('../../../db');

const getPostById = async (req, res) => {
    
    try {
        const { id } = req.params;

        const post = await Socialpost.findByPk(id, {
            include: [
                {
                    model: Userdev,
                    attributes: ['name', 'image', 'active']
                }
            ],
        });

        if (!post || !post.dataValues.active) {
            return res.status(404).json({ errors: [{msg: "La publicación no existe o fue eliminada"}]});
        }
        if (!post.dataValues.userdev.dataValues.active) {
            return res.status(404).json({ errors: [{msg: "El autor de la publicación no existe o fue eliminado"}]});
        }

        return res.status(200).json(post);

    } catch (error) {
        res.status(500).json({ errors: [{msg: error.message}] });
    }
}


module.exports = { getPostById };