// DataBase
const { Userdev } = require("../../db");

// bcryptjs para comparar la password ingresada con la de la DB
const bcryptjs = require('bcryptjs');

// jwt para tóken de autenticación
const jwt = require('jsonwebtoken');

const loginController = async (req, res, next) => {

    const { email, password } = req.body;

    try {
        // Verificar si un usuario está registrado o si fue eliminado
        const user = await Userdev.findOne({ where: { email } });
        if (!user) return res.status(404).json({errors: [{ msg: `No se encontró un usuario con el email ${email}`}]});
        if (!user.dataValues.active) return res.status(403).json({errors: [{ msg: `El usuario con el email ${email} fue eliminado`}]});

        // Verificar la password
        const passCorrecto = await bcryptjs.compare(password, user.password);
        if (!passCorrecto) return res.status(403).json({errors: [{msg: "password incorrecta"}]});

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
            res.json({token, user: {id: user.dataValues.id}});
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({errors: [{msg: error.message}]})
    }
}
module.exports = { loginController }