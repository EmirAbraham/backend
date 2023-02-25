// Database
const { Userdev } = require("../../db");

// bcryptjs para comparar la password ingresada con la de la DB
const bcryptjs = require('bcryptjs');

// jwt para tóken de autenticación
const jwt = require('jsonwebtoken');

const signUpController = async (req, res) => {

    try {

        const { email, password, nickName, name } = req.body;

        // Hashear la password
        const salt = await bcryptjs.genSalt(10);
        const newPassword = await bcryptjs.hash(password, salt);
        
        // Crear el usuario
        const newUser = await Userdev.create({ password: newPassword, email, nickName, name });

        // Crear el payload del JWT
        const payload = {
            user: {
                id: newUser.id,
                status: newUser.status
            }
        }

        // Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 172800 // vence en 2 días
        }, (error, token) => {
            if (error) throw error;

            //Mensaje de confirmación
            res.json({token, user: {id: newUser.dataValues.id, name, nickName, email}});
        });

    } catch (error) {
        res.status(500).send({errors: [{msg: error.message}]});
    }
}
  
module.exports = { signUpController };