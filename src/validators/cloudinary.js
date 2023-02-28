// DataBase
const { Cloudinaryimage } = require("../db.js");
const { Op } = require("sequelize");

// Express-validator
const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper.js');

const validatePublicId = [
    check("publicId")
      .trim()
      .isLength({ min: 3, max: 30 })
      .withMessage("publicId debe estar entre 3 y 30 caracteres")
      .matches(/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,28}[a-zA-Z0-9]$/)
      .withMessage(
        "publicId no permite espacios en blanco, solo acepta caracteres alfanuméricos y los siguientes símbolos: _ -"
      )
      .custom((value) => {
        return Cloudinaryimage.findOne({
          where: { publicId: { [Op.iLike]: `${value}` } },
        }).then((id) => {
          if (id) {
            return Promise.reject("El publicId ya es usado");
          }
        });
      }),
    (req, res, next) => {
      validateResult(req, res, next);
    },
]

module.exports = { validatePublicId }