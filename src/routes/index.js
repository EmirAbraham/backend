const { Router } = require("express");

//IMPORTAMOS LAS RUTAS
const users = require("./users/index.js");
const auth = require("./auth/index.js");
const qacuak = require("./qacuak/index.js");
const workcuak = require("./workcuak/index.js");
const hiringcuak = require("./hiringcuak/index.js");
const socialcuak = require("./socialcuak/index.js");
const comment = require("./socialcuak/comment.js");
const payment = require("./payment/index.js");

const router = Router();

//DEFINIMOS LAS RUTAS
router.use("/users", users);
router.use("/auth", auth);
router.use("/payment", payment);
//router.use('/qacuak', qacuak);
//router.use('/workcuak', workcuak);
//router.use('/hiringcuak', hiringcuak);
router.use("/socialcuak", socialcuak);
router.use("/socialcuak", comment);

module.exports = router;
