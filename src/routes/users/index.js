const { Router } = require('express');
const router = Router();

// middlewares
const { authorization } = require('../../middlewares/auth.js');
const { check } = require('express-validator');

// controllers
const {
    getUsers,
    getUserDetails,
    createUser,
    deleteUser,
    updateUser,
} = require('../../controllers/users/index.js');

router.get('/', async (req, res) => {
  try {
    const result = await getUsers(req.query);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getUserDetails(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/', 
  [
    check('name', 'name is a required value.').trim().not().isEmpty(),
    check('email', 'This is not a email format.').isEmail(),
    check('password', 'password does not allow blank spaces and must be between 8 and 20 character.').matches(/^(?!.*\s)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)
  ],
  createUser
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