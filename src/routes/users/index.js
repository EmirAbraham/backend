const { Router } = require('express');
const router = Router();
const { getUsers, getUserDetails } = require('../../controllers/users/index.js');

router.get('/', async (req, res) => {
    try {
        const result = await getUsers();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getUserDetails(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;