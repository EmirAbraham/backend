// Rutas para autenticar usuarios
const { Router } = require('express');
const router = Router();

// validators 
const { validateLogin } = require('../../validators/login.js');

// controllers
const { loginController } = require('../../controllers/login/index.js');

router.post('/', 
  validateLogin,
  loginController
);

module.exports = router;