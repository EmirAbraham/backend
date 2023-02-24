const { Userdev, Socialpost, Socialcomment } = require("../../db");

const deleteUser = async (req, res) => {

    try {
        const { id } = req.params;
        const userId = req.user.id;

        const user = await Userdev.findByPk(id);

        if (!user || !user.dataValues.active) {
            return res.status(404).json({ errors: [{msg: "El usuario no existe o ya fue eliminado"}]});
        }
        if (userId !== user.dataValues.id) {
            return res.status(404).json({ errors: [{msg: "El usuario a eliminar no corresponde al usuario loggeado"}]});
        }

        user.active = false;
        await user.save();

        const allPosts = await Socialpost.findAll({
            where: {userdevId: userId}
        });
        
        for (const post of allPosts) {
            post.active = false;
            await post.save();
        }

        const allComments = await Socialcomment.findAll({
            where: {userdevId: userId}
        });
        
        for (const comment of allComments) {
            comment.active = false;
            await comment.save();
        }

        return res.status(200).json("Se ha eliminado el usuario y todos sus registros");

    } catch (error) {
        res.status(500).json({ errors: [{msg: error.message}] });
    }
}

module.exports = { deleteUser };