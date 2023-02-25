// DataBase
const { Userdev } = require("../db.js");
const { Op } = require("sequelize");

// Express-validator
const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper.js');

// Validaciones
const validateSignUp = [
    check("name")
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage("name debe estar entre 2 y 50 caracteres")
      .matches(/^\S+(\s\S+)*$/)
      .withMessage("name no puede tener más de un espacio en cada palabra"),
    check("password")
      .isLength({ min: 8, max: 20 })
      .withMessage("password debe estar entre 8 y 20 caracteres")
      .matches(/^(?!.*\s)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)
      .withMessage("password debe estar sin espacios y al menos una mayúscula"),
    check("email")
      .trim()
      .normalizeEmail()
      .isEmail()
      .withMessage("El email enviado no cumple con el formato correspondiente")
      .custom((value) => {
        return Userdev.findOne({
          where: { email: { [Op.iLike]: `${value}` } },
        }).then((user) => {
          if (user) {
            return Promise.reject("El email ya es usado por un usuario");
          }
        });
      }),
    check("nickName")
      .trim()
      .isLength({ min: 3, max: 30 })
      .withMessage("nickName debe estar entre 3 y 30 caracteres")
      .matches(/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,28}[a-zA-Z0-9]$/)
      .withMessage(
        "nickName no permite espacios en blanco, solo acepta caracteres alfanuméricos y los siguientes símbolos: _ -"
      )
      .custom((value) => {
        return Userdev.findOne({
          where: { nickName: { [Op.iLike]: `${value}` } },
        }).then((user) => {
          if (user) {
            return Promise.reject("El nickName ya es usado por un usuario");
          }
        });
      }),
    (req, res, next) => {
      validateResult(req, res, next);
    },
  ];

const validateLogIn = [
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

module.exports = { validateSignUp, validateLogIn }