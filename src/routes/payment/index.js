const { Router } = require("express");
const router = Router();
const { pay, feedback } = require("../../controllers/payment");
const { authorization } = require('../../middlewares/auth.js');

router.post("/", authorization, pay);
router.get("/feedback", feedback);

module.exports = router;
