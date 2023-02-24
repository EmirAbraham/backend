const { Router } = require("express");
const router = Router();

// validators
const { validateSignup } = require("../../validators/signup.js");

// controllers
const { signupController } = require("../../controllers/signup/index.js");

router.post("/", validateSignup, async (req, res) => {
  try {
    const result = signupController(req, res);
    return result;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
