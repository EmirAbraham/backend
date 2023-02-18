const { Router } = require('express');
const router = Router();

// middlewares
const { authorization } = require('../../middlewares/auth.js');
const { check } = require('express-validator');

// validators
const { 
  validateGetUserDetails, 
  validateCreateUser 
} = require('../../validators/users.js');

// controllers
const {
    getUsers,
    getUserDetails,
    createUser,
    deleteUser,
    updateUser
} = require('../../controllers/users/index.js');

router.get('/', async (req, res) => {
  try {
    const result = await getUsers(req.query);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', 
  validateGetUserDetails, 
  async (req, res) => {
    try {
      const { id } = req.params;
      const result = await getUserDetails(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

router.post('/', 
  validateCreateUser,
  async (req, res) => {
    try {
      const result = createUser(req, res);
      return result;
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res.json("Usuario eliminado");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await updateUser(id, req.body);
    res.json("Actualización exitosa");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;