// DataBase
const { Userdev } = require("../db.js");
const { Op } = require("sequelize");

// Express-validator
const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

// Validaciones
const validateGetUserDetails = [
  check("id").custom((value) => {
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

const validateUpdateUser = [];

const validateDeleteUser = [
    check('id')
        .matches(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
        .withMessage("El id de publicación debe ser de tipo UUID"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

module.exports = { 
    validateGetUserDetails, 
    validateUpdateUser,
    validateDeleteUser
}