// Express-validator
const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

// Validaciones
const validateGetUserById = [
    param('id')
        /* .isUUID() */
        .custom((value) => {
            if (!validator.isUUID(value)) {
              throw new Error('El id del usuario debe ser de tipo UUID');
            }
            return true;
        }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateUpdateUser = [
    param('id')
        /* .isUUID() */
        .custom((value) => {
            if (!validator.isUUID(value)) {
              throw new Error('El id del usuario debe ser de tipo UUID');
            }
            return true;
          }),
    check('name')
        .optional()
        .trim()
        .customSanitizer((value) => {
            return value.replace(/\s+/g, ' ').trim();
        })
        .isString()
        .withMessage("name debe ser una string")
        .isLength({ min: 2, max: 50 })
        .withMessage("name debe estar entre 2 y 50 caracteres"),
    check('birthdate')
        .optional()
        .isDate()
        .withMessage("birthdate debe ser un formato válido de fecha"),
    check('image')
        .optional()
        .isURL()
        .withMessage("image debe ser un formato válido de URL"),
    check('description')
        .optional()
        .trim()
        .escape()
        .isLength({ max: 120 })
        .withMessage("description no puede superar los 120 caracteres"),
    check('about')
        .optional()
        .trim()
        .escape()
        .isLength({ max: 1500 })
        .withMessage("about no puede superar los 1500 caracteres"),
    check('skills')
        .optional()
        .isArray()
        .withMessage("skills debe ser un array")
        .custom((value) => {
            const isValid = value.every((element) => typeof element === 'string');
            if (!isValid) {
                throw new Error("Cada skill debe ser una string");
            }
            return true;
        }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateDeleteUser = [
    param('id')
        /* .isUUID() */
        .withMessage("El id del usuario debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

module.exports = {
    validateGetUserById,
    validateUpdateUser,
    validateDeleteUser
}