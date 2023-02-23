// DataBase
const { Userdev, Socialpost } = require('../db.js');
const { Op } = require('sequelize');

// Express-validator
const { check, body } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper.js');

// Validaciones
const validateGetPostById = [
    check('id').custom(value => {
        return Socialpost.findByPk(value, {attributes: ['active']}).then(post => {
            if (!post || !post.dataValues.active) {
                return Promise.reject("La publicación no existe o fue eliminada")
            }
        });
    }),
    body('user').custom((value, { req }) => {
        return Userdev.findByPk(req.user.id, {attributes: ['active']}).then(user => {
            if (!user || !user.dataValues.active) {
                return Promise.reject("El autor de la publicación no existe o fue eliminado");
            }
        });
    }),
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
    body('user').custom((value, { req }) => {
        return Userdev.findByPk(req.user.id, {attributes: ['active']}).then(user => {
            if (!user || !user.dataValues.active) {
                return Promise.reject("El usuario no existe o fue eliminado");
            }
        });
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateLikePost = [
    check('id').custom(value => {
        return Socialpost.findByPk(value, {attributes: ['active']}).then(post => {
            if (!post || !post.dataValues.active) {
                return Promise.reject("La publicación no existe o fue eliminada");
            }
        });
    }),
    body('user').custom((value, { req }) => {
        return Userdev.findByPk(req.user.id, {attributes: ['active']}).then(user => {
            if (!user || !user.dataValues.active) {
                return Promise.reject("El autor de la publicación no existe o fue eliminado");
            }
        });
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]; 

const validateUpdatePost = [
    check('content', "content es una variable requerida y no debe estar vacía")
        .trim()
        .not()
        .isEmpty()
        .escape(),
    check('id').custom((value, { req }) => {
        return Userdev.findByPk(req.user.id, {attributes: ['active']}).then(user => {
            if (!user || !user.dataValues.active) {
                return Promise.reject("El autor de la publicación no existe o fue eliminado");
            }
        });
    }),
    check('id').custom((value, { req }) => {
        return Socialpost.findByPk(value, {attributes: ['active', 'userdevId']}).then(post => {
            if (!post || !post.dataValues.active) {
                return Promise.reject("La publicación no existe o fue eliminada");
            }
            if (post.dataValues.userdevId !== req.user.id) {
                return Promise.reject("El usuario no es el autor de la publicación");
            }
        });
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateDeletePost = [
    check('id').custom((value, { req }) => {
        return Userdev.findByPk(req.user.id, {attributes: ['active']}).then(user => {
            if (!user || !user.dataValues.active) {
                return Promise.reject("El autor de la publicación no existe o fue eliminado");
            }
        });
    }),
    check('id').custom((value, { req }) => {
        return Socialpost.findByPk(value, {attributes: ['active', 'userdevId']}).then(post => {
            if (!post || !post.dataValues.active) {
                return Promise.reject("La publicación no existe o ya fue eliminada");
            }
            if (post.dataValues.userdevId !== req.user.id) {
                return Promise.reject("El usuario no es el autor de la publicación");
            }
        });
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

module.exports = {
    validateGetPostById,
    validateCreatePost,
    validateLikePost,
    validateUpdatePost,
    validateDeletePost
}