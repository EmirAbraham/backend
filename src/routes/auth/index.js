// Rutas para autenticar usuarios
const { Router } = require('express');
const router = Router();

// validators 
const { validateAuth } = require('../../validators/auth.js');

// controllers
const { authController } = require('../../controllers/auth/index.js');

router.post('/', 
  validateAuth,
  authController
);

module.exports = router;