const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const hbs = require('express-hbs');
const session = require('express-session');
const userSetting = require('./middleware/userSettings');
const indexRouter = require('./routes/index');
//const routes = require('./routes/routes.ts');

// view engine setup
const app = express();
app.engine('hbs', hbs.express4());
app.set('view engine', 'hbs');
app.set('views', path.join('views'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "dgaktsncosgartwoxmdhsjasnhjaoejnddsa",
  resave: false,
  saveUninitialized: true
}));

app.use(userSetting);
app.use('/', indexRouter);
//app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
