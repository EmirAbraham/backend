const { Userdev, Socialpost, Socialcomment } = require('../../../db');

const deletePost = async (req, res) => {

    try {
        const { id } = req.params;
        const userId = req.user.id;
        const superadmin = await Userdev.findByPk(req.user.id)
        const admin = await Userdev.findByPk(req.user.id)

        const post = await Socialpost.findByPk(id, {
            include: [
                {
                    model: Userdev,
                    attributes: ['active']
                }                
            ]
        });
        

        if (!post || !post.dataValues.active) {
            return res.status(404).json({ errors: [{msg: "La publicación no existe o ya fue eliminada"}]});
        }
        if (!post.dataValues.userdev.dataValues.active) {
            return res.status(404).json({ errors: [{msg: "El autor de la publicación no existe o fue eliminado"}]});
        }
        if (post.dataValues.userdevId !== userId) {
            if (!(admin.dataValues.status === 'admin' || superadmin.dataValues.status === 'superadmin')) {
                return res.status(401).json({ errors: [{msg: "El usuario no está habilitado para borrar esta publicación"}]});
            }
        }
        
        post.active = false;
        await post.save();

        const allComments = await Socialcomment.findAll({
            where: {socialpostId: id}
        })
        
        for (const comment of allComments) {
            comment.active = false;
            await comment.save();
        }

        return res.status(200).json("Se ha eliminado el posteo y sus comentarios");

    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: [{msg: error.message}] });
    }
}

module.exports = { deletePost } 