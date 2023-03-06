// DataBase
const { Userdev, Socialpost } = require('../db.js');

// Express-validator
const { check, body } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper.js');

// Validaciones
const validateGetCommentsByPostId = [
    check('id')
        .matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
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
        .matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
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
        .matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
        .withMessage("El id de publicación debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateCreatePost = [
    check('id')
        .matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
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

const validateLikePost = [
    check('id')
        .matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
        .withMessage("El id de publicación debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateUpdatePost = [
    check('id')
        .matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
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
        .matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
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