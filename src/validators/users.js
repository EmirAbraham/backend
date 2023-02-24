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

const validateUpdateDeleteUser = [
  check("id").custom((value, { req }) => {
    return Userdev.findByPk(value, { attributes: ["active"] }).then((user) => {
      if (!user || !user.dataValues.active) {
        return Promise.reject("El usuario no existe o ya fue eliminado");
      }
      if (value !== req.user.id) {
        return Promise.reject(
          "El usuario a editar/eliminar no corresponde al usuario loggeado"
        );
      }
    });
  }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateGetUserDetails,
  validateUpdateDeleteUser,
};
