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

router.get("/admins", authorization, getAdmins);

router.put('/:id/status', authorization, updateStatus);

router.get("/:id", authorization, validateGetUserById, getUserById);

router.put('/:id', authorization, validateUpdateUser, updateUser);

router.delete('/:id', authorization, validateDeleteUser, deleteUser);

module.exports = router;