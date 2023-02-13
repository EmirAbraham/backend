const { Router } = require('express');

const getAllUsersMiddleware = require('./getAllUsers');
const getUserByIdMiddleware = require('./getUserById');
const getSocialPostByIdMiddleware = require('./getSocialPostById');
const postNewSocialPostMiddleware = require('./postNewSocialPost');

const router = Router();

router.use('/users', getAllUsersMiddleware);
router.use('/users', getUserByIdMiddleware);
router.use('/socialcuak', getSocialPostByIdMiddleware);
router.use('/socialcuak', postNewSocialPostMiddleware);

module.exports = router;
