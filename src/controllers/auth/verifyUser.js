const { Userdev } = require('../../db');

const verifyUser = async (token, email) => {
    const user = await Userdev.findOne({
        where: {
            email: email
        }
    })
    if(!user){
        return "El usuario no existe";
    } 
    
    user.active = true;
    await user.save();
    
    return "Usuario verificado correctamente";
};

module.exports = {verifyUser};