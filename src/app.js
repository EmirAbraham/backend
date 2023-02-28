const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const passport = require("passport");
const cors = require("cors");

const app = express();


app.use(cors());
app.options("*", cors());
  app.use((req, res, next) => {
    app.options(
      "*",
      cors({
        allowedHeaders: ["x-auth-token"],
      })
    );
    res.header("Access-Control-Allow-Origin","http://127.0.0.1:5173");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

app.use(session({ secret: process.env.SECRETA }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

module.exports = app;
