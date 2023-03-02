const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
    // Leer token del header
    const token = req.header('x-auth-token');

    // Revisar si no hay token
    if (!token) return res.status(401).json({errors: [{msg: "Envíe un tóken"}]});

    // Validar el token
    try {
        const encryption = jwt.verify(token, process.env.SECRETA);
        req.user = encryption.user;
        next();
    } catch (error) {
        res.status(401).json({errors: [{msg: "Tóken inválido"}]})
    }
}

module.exports = { authorization }