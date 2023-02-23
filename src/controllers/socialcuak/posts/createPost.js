const { Socialpost, Userdev } = require('../../../db');

const createPost = async (req, res) => {
    
    try {
        const { content } = req.body;
        const userId = req.user.id;

        const user = await Userdev.findByPk(userId, {attributes: ['active', 'name', 'image']});
        if (!user || !user.dataValues.active) {
            return res.status(404).json({ errors: [{msg: "El usuario no existe o fue eliminado"}]});
        }

        const newPost = await Socialpost.create({ content, userdevId: userId });
        const result = { ...newPost.dataValues , userdev: { name: user.name, image: user.image }}

        return res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ errors: [{msg: error.message}] });
    }
}

module.exports = { createPost }