const { Userdev, Socialpost, Socialcomment } = require('../../../db');

const likePost = async (req, res) => {
    
    try {
        const { id } = req.params;
        const userId = req.user.id;
        
        const post = await Socialpost.findByPk(id, {
            include: [
                {
                    model: Userdev,
                    attributes: ['name', 'image', 'active']
                },
                {
                    model: Socialcomment,
                    attributes: ['content', 'likes', 'active'/* , 'createdAt' */],
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

        post.likes = [...post.likes, userId];
        const newPost = await post.save();
        
        return res.status(200).json(newPost);

    } catch (error) {
        res.status(500).json({ errors: [{msg: error.message}] });
    }   
}

module.exports = { likePost }