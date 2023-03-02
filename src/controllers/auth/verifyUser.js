const { Userdev } = require("../../db");

const verifyUser = async (req, res) => {
  
    try {
        const { email } = req.query;
        const user = await Userdev.findOne({
            where: {
                email: email,
            },
            attributes: {
                exclude: ['password']
            } 
        });
          
        if (!user) return res.status(404).json({errors: [{ msg: `No se encontró un usuario con el email ${email}`}]});
        
        user.active = true;
        await user.save();
        
        return res.status(200).json(user);

    } catch (error) {
        res.status(500).send({errors: [{msg: error.message}]});
    }
};

module.exports = { verifyUser };