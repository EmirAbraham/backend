const { Router } = require("express");
const router = Router();

const { newUser } = require("../../controllers/users");

router.post("/", async (req, res) => {
  try {
    const user = await newUser(req.body);
    res.json(user);
  } catch (e) {
    res.status(400).send(e.toString());
    console.log(e);
  }
});

module.exports = router;
