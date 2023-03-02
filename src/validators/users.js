// DataBase
const { Userdev } = require("../db.js");

// Express-validator
const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

// Validaciones
const validateGetUserById = [
    check('id')
        .matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
        .withMessage("El id de publicación debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateUpdateUser = [
    check('id')
        .matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
        .withMessage("El id de publicación debe ser de tipo UUID")
        .custom((value, { req }) => {
            if (value !== req.user.id) {
                return "No está permitido editar los datos de otro usuario";
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
        .withMessage("El id de publicación debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

module.exports = {
    validateGetUserById,
    validateUpdateUser,
    validateDeleteUser
}