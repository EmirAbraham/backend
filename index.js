const app = require("./src/app");
const { conn } = require("./src/db");

const socketIO = require('socket.io');
const http = require('http');
let server = http.createServer(app);

const port = process.env.PORT || 3001;
conn.sync().then(() => {
  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});

module.exports.io = socketIO(server);
require('./src/sockets/socket.js');