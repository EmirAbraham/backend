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
                }
            ]
        });
        
        if (!post || !post.dataValues.active) {
            return res.status(404).json({ errors: [{msg: "La publicación no existe o fue eliminada"}]});
        }
        if (!post.dataValues.userdev.dataValues.active) {
            return res.status(404).json({ errors: [{msg: "El autor de la publicación no existe o fue eliminado"}]});
        }

        const likes = post.likes;
        const newLikes = likes.filter(el => el !== userId);

        if (newLikes.length < likes.length) {
            post.likes = newLikes;
            await post.save(); 
            return res.status(200).json({msg: "El like se ha retirado"});
        } else {
            post.likes = [...likes, userId];
            await post.save();
            return res.status(200).json({msg: "El like se ha agregado"});
        }

    } catch (error) {
        res.status(500).json({ errors: [{msg: error.message}] });
    }   
}

module.exports = { likePost }