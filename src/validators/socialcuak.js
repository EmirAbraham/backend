// DataBase
const { Userdev, Socialpost } = require('../db.js');

// Express-validator
const { check, param } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper.js');

// Validaciones
const validateGetCommentsByPostId = [
    // param('id')
    //     .isUUID()
    //     .withMessage("El id del usuario debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const validateGetPostByUserId = [
    // param('id')
    //     .isUUID()
    //     .withMessage("El id del usuario debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const validateGetPostById = [
    // param('id')
    //     .isUUID()
    //     .withMessage("El id del usuario debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateCreatePost = [
    // param('id')
    //     .isUUID()
    //     .withMessage("El id del usuario debe ser de tipo UUID"),
    check('content', "content es una variable requerida y no debe estar vacía")
        .trim()
        .not()
        .isEmpty()
        .escape(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateLikePost = [
    // param('id')
    //     .isUUID()
    //     .withMessage("El id del usuario debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateUpdatePost = [
    // param('id')
    //     .isUUID()
    //     .withMessage("El id del usuario debe ser de tipo UUID"),
    check('content', "content es una variable requerida y no debe estar vacía")
        .trim()
        .not()
        .isEmpty()
        .escape(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateDeletePost = [
    // param('id')
    //     .isUUID()
    //     .withMessage("El id del usuario debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

module.exports = {
    validateGetPostById,
    validateCreatePost,
    validateLikePost,
    validateUpdatePost,
    validateDeletePost,
    validateGetPostByUserId,
    validateGetCommentsByPostId
}