// DataBase
const { Userdev, Socialpost } = require('../db.js');
const { Op } = require('sequelize');

// Express-validator
const { check, body } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper.js');

// Validaciones
const validateGetCommentsByPostId = [
    check('id')
        .isUUID()
        .withMessage("El id de publicación debe ser de tipo UUID")
        .custom((value) => {
            return Socialpost.findByPk(value, { attributes: ["active"] }).then((post) => {
                if (!post || !post.dataValues.active) {
                    return Promise.reject("El post no existe o fue eliminado");
                }
            });
        }),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const validateGetPostByUserId = [
    check('id')
        .isUUID()
        .withMessage("El id de publicación debe ser de tipo UUID")
        .custom((value) => {
            return Userdev.findByPk(value, { attributes: ["active"] }).then((user) => {
                if (!user || !user.dataValues.active) {
                    return Promise.reject("El usuario no existe o fue eliminado");
                }
            });
        }),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const validateGetPostById = [
    check('id')
        .isUUID()
        .withMessage("El id de publicación debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateCreatePost = [
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
    check('id')
        .isUUID()
        .withMessage("El id de publicación debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateUpdatePost = [
    check('id')
        .isUUID()
        .withMessage("El id de publicación debe ser de tipo UUID"),
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
    check('id')
        .isUUID()
        .withMessage("El id de publicación debe ser de tipo UUID"),
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