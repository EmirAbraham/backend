// Express-validator
const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper.js");

//Validaciones
const validateGetUserById = [
  // param('id')
  //   .custom((value) => {
  //     if (!validator.isUUID(value)) {
  //       throw new Error('El id del usuario debe ser de tipo UUID');
  //     }
  //     return true;
  //   }),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

const validateUpdateUser = [
  // param('id')
  //   .custom((value) => {
  //     if (!validator.isUUID(value)) {
  //       throw new Error('El id del usuario debe ser de tipo UUID');
  //     }
  //     return true;
  //   }),
  check('name')
    .optional()
    .trim()
    .custom((value, { req }) => {
      if (!validator.isString(value)) {
        throw new Error('name debe ser una string');
      }
      if (!validator.isLength(value, { min: 2, max: 50 })) {
        throw new Error('name debe estar entre 2 y 50 caracteres');
      }
      return true;
    }),
  check('birthdate')
    .optional()
    .custom((value, { req }) => {
      if (!validator.isDate(value)) {
        throw new Error('birthdate debe ser un formato válido de fecha');
      }
      return true;
    }),
  check('image')
    .optional()
    .custom((value, { req }) => {
      if (!validator.isURL(value)) {
        throw new Error('image debe ser un formato válido de URL');
      }
      return true;
    }),
  check('description')
    .optional()
    .trim()
    .escape()
    .custom((value, { req }) => {
      if (!validator.isLength(value, { max: 120 })) {
        throw new Error('description no puede superar los 120 caracteres');
      }
      return true;
    }),
  check('about')
    .optional()
    .trim()
    .escape()
    .custom((value, { req }) => {
      if (!validator.isLength(value, { max: 1500 })) {
        throw new Error('about no puede superar los 1500 caracteres');
      }
      return true;
    }),
  check('skills')
    .optional()
    .isArray()
    .custom((value, { req }) => {
      const isValid = value.every((element) => typeof element === 'string');
      if (!isValid) {
        throw new Error('Cada skill debe ser una string');
      }
      return true;
    }),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

const validateDeleteUser = [
  // param('id')
  //   .custom((value) => {
  //     if (!validator.isUUID(value)) {
  //       throw new Error('El id del usuario debe ser de tipo UUID');
  //     }
  //     return true;
  //   }),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

module.exports = {
  validateGetUserById,
  validateUpdateUser,
  validateDeleteUser
}