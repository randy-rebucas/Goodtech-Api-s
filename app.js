var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var helmet = require('helmet');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tokenRouter = require('./routes/token');
var dictionaryRouter = require('./routes/dictionary');
var customerRouter = require('./routes/customer');
var casaRouter = require('./routes/casa');
var loanRouter = require('./routes/loan');
var productRouter = require('./routes/product');

var app = express();

/**
 * CORS
 */
 var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// remove default powered by on header
app.disable('x-powered-by');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use(helmet());

app.use('/api/v2', indexRouter);
app.use('/api/v2/users', usersRouter);
app.use('/api/v2/token', tokenRouter);
app.use('/api/v2/dictionary', dictionaryRouter);
app.use('/api/v2/casa', casaRouter);
app.use('/api/v2/customer', customerRouter);
app.use('/api/v2/loan', loanRouter);
app.use('/api/v2/product', productRouter);

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
