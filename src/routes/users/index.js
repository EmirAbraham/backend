const { Router } = require("express");
const router = Router();

// middlewares
const { authorization } = require("../../middlewares/auth.js");

// validators
const {
    validateGetUserById,
    validateUpdateUser,
    validateDeleteUser
} = require('../../validators/users.js');

// controllers
const {
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
    updateStatus,
    getAdmins,
} = require('../../controllers/users/index.js');


router.get("/", getUsers);

router.get("/admins", async (req, res) => {
    try {
        const result = await getAdmins(req.query);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id/status', authorization, updateStatus);

router.get("/:id", authorization, validateGetUserById, getUserById);

router.put('/:id', authorization, validateUpdateUser, updateUser);

router.delete('/:id', authorization, validateDeleteUser, deleteUser);

module.exports = router;