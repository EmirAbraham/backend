// Express-validator
const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

// Validaciones
const validateGetUserById = [
    check('id')
        .matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
        .withMessage("El id del usuario debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateUpdateUser = [
    check('id')
        .matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
        .withMessage("El id del usuario debe ser de tipo UUID"),
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
    check('id')
        .matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
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