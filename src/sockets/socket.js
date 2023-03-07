const { io } = require('../../index.js');

io.on('connection', (client) => {

    console.log("usuario conectado");

});