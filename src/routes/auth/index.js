// Rutas para autenticar usuarios
const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { authController } = require('../../controllers/auth/index.js');

router.post('/', 
  [
    check('email', 'This is not a email format.').isEmail(),
    check('password', 'password does not allow blank spaces and must be between 8 and 20 character.').matches(/^(?!.*\s)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)
  ],
  authController
);

module.exports = router;