const { Userdev, Socialpost, Socialcomment } = require('../../../db');

const deleteComment = async (req, res) => {

    try {
        const { id } = req.params;
        const userId = req.user.id;
        const superadmin = await Userdev.findByPk(req.user.id)
        const admin = await Userdev.findByPk(req.user.id)

        const comment = await Socialcomment.findByPk(id, {
            include: [
                {
                    model: Userdev,
                    attributes: ['active']
                }              
            ]
        });
        

        if (!comment || !comment.dataValues.active) {
            return res.status(404).json({ errors: [{msg: "El comentario no existe o ya fue eliminado"}]});
        }
        if (!comment.dataValues.userdev.dataValues.active) {
            return res.status(404).json({ errors: [{msg: "El autor del comentario no existe o fue eliminado"}]});
        }
        if (comment.dataValues.userdevId !== userId) {
            if (!(admin.dataValues.status === 'admin' || superadmin.dataValues.status === 'superadmin')) {
                return res.status(401).json({ errors: [{msg: "El usuario no está habilitado para borrar este comentario"}]});
            }
        }
        
        comment.active = false;
        await comment.save();

        return res.status(200).json("Se ha eliminado el comentario");

    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: [{msg: error.message}] });
    }
}

module.exports = { deleteComment } 