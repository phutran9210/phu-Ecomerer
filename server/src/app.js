const express = require('express')
var createError = require("http-errors");
require('dotenv').config()
const app = express()
const helmet = require("helmet")
var path = require("path");
const compression = require("compression")
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

require("../database/mongodb")

const usersRouter = require("./v1/user/user.controller");


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );

  app.use(helmet());
  app.use(compression());
  app.use(logger("dev"));
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));

  app.use("/api/v1/user", usersRouter);




  app.use(function (req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });
  
  module.exports = app;
  