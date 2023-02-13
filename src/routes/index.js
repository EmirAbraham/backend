const { Router } = require('express');

//IMPORTAMOS LAS RUTAS
const users = require('./users/index.js');
const qacuak = require('./qacuak/index.js');
const workcuak = require('./workcuak/index.js');
const hiringcuak = require('./hiringcuak/index.js');
const socialcuak = require('./socialcuak/index.js');

const router = Router();

//DEFINIMOS LAS RUTAS
router.use('/users', users);
router.use('/qacuak', qacuak);
router.use('/workcuak', workcuak);
router.use('/hiringcuak', hiringcuak);
router.use('/socialcuak', socialcuak);

module.exports = router;