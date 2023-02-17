const { Userdev } = require("../../db");
const { Op } = require('sequelize');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {

    //revisar si hay errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array()});

    const { email, password, nickName, name } = req.body;

    try {
        // Validar si ya hay userdev con email o nickname 
        const existsEmail = await Userdev.findOne({
            where: {
                email: {
                    [Op.iLike]: `${email.trim()}`}
                }
            }
        );
        const existsNickName = await Userdev.findOne({
            where: {
                nickName: {
                    [Op.iLike]: `${nickName.trim()}`}
                }
            }
        );

        if (existsEmail || existsNickName) return res.status(400).json({ msg: "User already exists"});
        
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
            res.json({token});
        });

        // Retorno el usuario creado
        // return res.status(200).json(newUser);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
  
module.exports = { createUser };