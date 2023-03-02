const { Userdev, Socialpost, Socialcomment } = require('../../db.js');

const getUserById = async (req, res) => {
    
    try {
        const { id } = req.params;
        
        const user = await Userdev.findByPk(id, {
            attributes: {
                exclude: ['password']
            }, 
        });
    
        return res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({ errors: [{msg: error.message}] });
    }
}

module.exports = { getUserById };