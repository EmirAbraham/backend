const { Userdev, Socialpost, Socialcomment } = require("../../db");

const deleteUser = async (req, res) => {

    try {
        const { id } = req.params;
        const userId = req.user.id;
        const superadmin = await Userdev.findByPk(req.user.id)
        const admin = await Userdev.findByPk(req.user.id)

        const user = await Userdev.findByPk(id);

        if (!user) {
            return res.status(404).json({ errors: [{msg: "El usuario no existe"}]});
        }
        if (userId !== user.dataValues.id) {
            if(!(admin.dataValues.status === 'admin' || superadmin.dataValues.status === 'superadmin')){
                return res.status(404).json({ errors: [{msg: "El usuario no tiene permitido eliminar a este usuario"}]});}
        }

        user.active = !user.active;
        await user.save();

        const allPosts = await Socialpost.findAll({
            where: {userdevId: id}
        });
        
        for (const post of allPosts) {
            post.active = false;
            await post.save();
        }

        const allComments = await Socialcomment.findAll({
            where: {userdevId: id}
        });
        
        for (const comment of allComments) {
            comment.active = false;
            await comment.save();
        }

        if (user.dataValues.active) {
            return res.status(200).json("Se ha recuperado el usuario");
        } else {
            return res.status(200).json("Se ha eliminado el usuario y todos sus registros");
        }

    } catch (error) {
        res.status(500).json({ errors: [{msg: error.message}] });
    }
}

module.exports = { deleteUser };