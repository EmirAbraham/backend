// Express-validator
const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper.js');

// Validaciones
const validateAuth = [
    check('email')
        .normalizeEmail()
        .trim()
        .isEmail()
        .withMessage("El email enviado no cumple con el formato correspondiente"),
    check('password')
        .trim()
        .matches(/^(?!.*\s)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)
        .withMessage("password debe estar entre 8 y 20 caracteres, sin espacios y al menos una mayúscula"),  
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

module.exports = { validateAuth }