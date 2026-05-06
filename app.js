var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// var indexRouter = require('./routes/index');
var loginRouter = require("./routes/login");
var usersRouter = require("./routes/users");
var dashboardRouter = require("./routes/dashboard");
var ticketRouter = require("./routes/ticket");
var createRouter = require("./routes/create");
var slbuticketRouter = require("./routes/slbuticket");
var userlistRouter = require("./routes/userlist");
var branchRouter = require("./routes/branch");
var roleRouter = require("./routes/role");
var dispatchRouter = require("./routes/dispatch");
var assignfieldRouter = require("./routes/assignfield");

var app = express();
// view engine setup
app.set("views", path.join(__dirname, "views/layout"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use('/', indexRouter);
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/dashboard", dashboardRouter);
app.use("/ticket", ticketRouter);
app.use("/create", createRouter);
app.use("/slbuticket", slbuticketRouter);
app.use("/userlist", userlistRouter);
app.use("/branch", branchRouter);
app.use("/role", roleRouter);
app.use("/dispatch", dispatchRouter);
app.use("/assignfield", assignfieldRouter);


// catch 404 and forward to error handler
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
