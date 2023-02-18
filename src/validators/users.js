const { Userdev } = require('../db.js');
const { Op } = require('sequelize');

const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper.js');

// const validateGetUsers = [];

const validateGetUserDetails = [
    check('id').custom(value => {
            return Userdev.findByPk(value, {attributes: ['active']}).then(user => {
                if (!user.dataValues.active) {
                    return Promise.reject("User does not exist or was deleted");
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
        .withMessage("name must have no leading and trailing spaces and no more than one space between each word")
        .matches(/^\S+(\s\S+)*$/),
    check('password', "password must be between 8 and 20 characters.")
        .isLength({ min: 8, max: 20})    
        .withMessage("password contains at least one lowercase letter, one uppercase letter, and one number")
        .matches(/^(?!.*\s)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/),
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
        .withMessage("nickName only accepts alphanumeric characters and the following symbols: _ -")
        .matches(/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,28}[a-zA-Z0-9]$/)
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

const validateDeleteUser = [];
/* 
Debe tener un id válido 
El usuario no debe estar en false
Debe existir el usuario

NO ES DE VALIDACION
autorización si es el mismo usuario
*/

const validateUpdateUser = [];
/* 
Debe tener un id válido 
El usuario no debe estar en false
Debe existir el usuario

NO ES DE VALIDACION
autorización si es el mismo usuario
*/

module.exports = { 
    validateGetUserDetails, 
    validateCreateUser, 
    validateDeleteUser, 
    validateUpdateUser
}