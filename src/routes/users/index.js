const { Router } = require('express');
const router = Router();

// middlewares
const { authorization } = require('../../middlewares/auth.js');

// validators
const { 
    validateGetUserDetails, 
    validateCreateUser,
    validateUpdateUser,
    validateDeleteUser
} = require('../../validators/users.js');

// controllers
const {
    getUsers,
    getUserDetails,
    createUser,
    deleteUser,
    updateUser,
    updateStatus
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
  authorization, 
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

router.put('/:id/status',
  authorization, 
  async (req, res) => {
  try {
    const { id } = req.params;
    const newStatus = await updateStatus(id, req.body, req.user.id);
    res.status(200).json(newStatus);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id',
  authorization, 
  validateUpdateUser,
  async (req, res) => {
  try {
    const { id } = req.params;
    await updateUser(id, req);
    res.json("Actualización exitosa");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.delete('/:id', authorization, validateDeleteUser, deleteUser);


module.exports = router;