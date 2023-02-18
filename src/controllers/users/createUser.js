const { Userdev } = require("../../db");
const { Op } = require('sequelize');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {

    const { email, password, nickName, name } = req.body;

    // Hashear la password
    const salt = await bcryptjs.genSalt(10);
    const newPassword = await bcryptjs.hash(password, salt);
    
    // Crear el usuario
    const newUser = await Userdev.create({ password: newPassword, email, nickName, name });

    // Crear el payload del JWT
    const payload = {
        user: {
            id: newUser.id
        }
    }

    // Firmar el JWT
    jwt.sign(payload, process.env.SECRETA, {
        expiresIn: 172800 // vence en 2 días
    }, (error, token) => {
        if (error) throw error;

        //Mensaje de confirmación
        res.json({token, user: newUser});
    });

}
  
module.exports = { createUser };