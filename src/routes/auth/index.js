const { Router } = require("express");
const router = Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

// validators
const { validateSignUp, validateLogIn } = require("../../validators/auth.js");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

// controllers
const {
  signUpController,
  logInController,
  verifyUser,
} = require("../../controllers/auth/index.js");

// Estrategia Google
require("../../middlewares/google.js");

router.get("/", (req, res) => {
  res.send('<a href="/auth/google"> Authenticate with Google </a>');
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/google/protected",
    failureRedirect: "/auth/google/failure",
  })
);

router.get("/google/failure", (req, res) => {
  res.redirect(`https://front-end-six-black.vercel.app/?user=${JSON.stringify("No se pudo autenticar...")}`);
});

router.get("/google/protected", isLoggedIn, (req, res) => {
  const payload = {
    user: {
      id: req.user[0].id,
      status: req.user[0].status,
    },
  };

  jwt.sign(
    payload,
    process.env.SECRETA,
    {
      expiresIn: 172800,
    },
    (error, token) => {
      if (error) throw error;

        res.redirect(
        `http://127.0.0.1:5173/social/?user=${JSON.stringify({
          id: req.user[0].id,
          name: req.user[0].name,
          nickName: req.user[0].nickName,
          email: req.user[0].email,
          image: req.user[0].image,
          token: token,
        })}`
      );
    });
});

router.get('/verify', async (req, res) => {
  try {
    const { token, email } = req.query;
    const verifiedUser = verifyUser(token, email);
    res.send(200).json(verifiedUser)
  } catch (error) {
    res.send(400).json({ error: error.message });
  }
})

router.post("/signup", validateSignUp, signUpController);

router.post("/login", validateLogIn, logInController);

module.exports = router;
