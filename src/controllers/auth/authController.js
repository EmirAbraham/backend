const { Userdev } = require("../../db");
// const { Op } = require('sequelize');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const authController = async (req, res, next) => {

    //revisar si hay errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array()});

    const { email, password } = req.body;

    try {
        // Revisar si un usuario está registrado o si fue eliminado
        const user = await Userdev.findOne({ where: { email } });
        if (!user) return res.status(400).json({ msg: "User does not exist"});
        if (!user.dataValues.active) return res.status(400).json({ msg: "User was deleted"});

        // Revisar el password
        const passCorrecto = await bcryptjs.compare(password, user.password);
        if (!passCorrecto) return res.status(400).json({msg: "Wrong password"})

        // Si es correcto el email y la password crear el payload del JWT
        const payload = {
            user: {
                id: user.id
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

    } catch (error) {
        res.status(400).send({msg: error.message})
    }
}

module.exports = { authController }