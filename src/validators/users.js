// DataBase
const { Userdev } = require('../db.js');
const { Op } = require('sequelize');

// Express-validator
const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper.js');

// Validaciones
const validateGetUserDetails = [
    check('id').custom(value => {
        return Userdev.findByPk(value, {attributes: ['active']}).then(user => {
            if (!user || !user.dataValues.active) {
                return Promise.reject("El usuario no existe o fue eliminado");
            }
        });
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateCreateUser = [
    check('name', "name must be between 2 and 50 characters.")
        .isLength({ min: 2, max: 50})
        .matches(/^\S+(\s\S+)*$/)
        .withMessage("name must have no leading and trailing spaces and no more than one space between each word"),
    check('password', "password must be between 8 and 20 characters.")
        .isLength({ min: 8, max: 20})    
        .matches(/^(?!.*\s)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)
        .withMessage("password contains at least one lowercase letter, one uppercase letter, and one number. NO blank spaces"),
    check('email', "This is not a email format.")
        .isEmail()
        .custom(value => {
        return Userdev.findOne({ where: { email: { [Op.iLike]: `${value}`} } } ).then(user => {
            if (user) {
                return Promise.reject("E-mail already in use by someone.");
            }
        });
    }),
    check('nickName', "nickName must be between 4 and 25 characters.")
        .isLength({ min: 3, max: 30})
        .matches(/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,28}[a-zA-Z0-9]$/)
        .withMessage("nickName only accepts alphanumeric characters and the following symbols: _ -. NO blank spaces")
        .custom(value => {
        return Userdev.findOne({ where: { nickName: { [Op.iLike]: `${value}`} } } ).then(user => {
            if (user) {
                return Promise.reject("nickName already in use by someone.");
            }
        });
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

const validateUpdateDeleteUser = [
    check('id').custom((value, { req }) => {
        return Userdev.findByPk(value, {attributes: ['active']}).then(user => {
            if (!user || !user.dataValues.active) {
                return Promise.reject("El usuario no existe o ya fue eliminado");
            }
            if (value !== req.user.id) {
                return Promise.reject("El usuario a editar/eliminar no corresponde al usuario loggeado");
            }
        })
    }),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

module.exports = { 
    validateGetUserDetails, 
    validateCreateUser, 
    validateUpdateDeleteUser
}