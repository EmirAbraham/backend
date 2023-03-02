const { Userdev } = require('../../db.js');

const getUserById = async (req, res) => {
    
    try {
        const { id } = req.params;
        const { status } = req.user;
       
        const user = await Userdev.findByPk(id, {
            attributes: {
                exclude: ['password']
            }, 
        });

        if (!user) {
            return res.status(404).json({ errors: [{msg: "El usuario no existe"}]});
        }

        if (!user.dataValues.active && status == "dev") {
            return res.status(404).json({ errors: [{msg: "El usuario fue eliminado, solo un administrador puede acceder a los datos"}]});
        }
    
        return res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({ errors: [{msg: error.message}] });
    }
}

module.exports = { getUserById };