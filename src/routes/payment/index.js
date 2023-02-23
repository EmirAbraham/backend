const { Router } = require("express");
const router = Router();
const { pay, feedback } = require("../../controllers/payment");

router.post("/", pay);
router.get("/feedback", feedback);

module.exports = router;
