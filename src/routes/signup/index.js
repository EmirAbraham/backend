const { Router } = require("express");
const router = Router();
const passport = require("passport");

// validators
const { validateSignup } = require("../../validators/signup.js");
// middlewares
const { authGoogle } = require("../../middlewares/google.js");
// controllers
const {
  signupController,
  googleController,
} = require("../../controllers/signup/index.js");

router.post("/", validateSignup, async (req, res) => {
  try {
    const result = signupController(req, res);
    return result;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get(
  "/google",
  passport.authenticate(authGoogle, {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    session: false,
  }),
  googleController
);

module.exports = router;
