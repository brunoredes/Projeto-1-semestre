const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");

//var indexRouter = require('./routes/index');
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/cadastro");
const logoutRouter = require("./routes/logout");
const leituraRouter = require("./routes/leitura");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("trust proxy", 1);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(
  session({
    secret: "lalala",
    resave: false,
    saveUninitialized: true,
    cookie: {
      name: "testeNome",
      secure: "auto",
      maxAge: new Date(Date.now() + 3600000)
    }
  })
);

app.use((req, res, next) => {
  next();
});

//app.use('/', indexRouter);
//app.use('/index', indexRouter);
app.use("/login", loginRouter);
app.use("/cadastro", signupRouter);
app.use("/logout", logoutRouter);
app.use("/leitura", leituraRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
