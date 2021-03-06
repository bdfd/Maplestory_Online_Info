var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var cors = require('cors');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

//DB Configuration
const db = require('./config/key').MongoURI;
//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connection is online...'))
  .catch((err) => console.log('error in creating DB' + err));

var indexRouter = require('./routes/01Index');
var userRouter = require('./routes/02User');
var userEquipRouter = require('./routes/02User_Equip');
var userItemRouter = require('./routes/02User_Item');
var charRouter = require('./routes/03Character');
var equipRouter = require('./routes/04Equipment');
var marketRouter = require('./routes/05Market_Trend');
var petRouter = require('./routes/06Pet');
var trianingRouter = require('./routes/07Training_Article');
var otherRouter = require('./routes/08Other');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/user/equipment', userEquipRouter);
app.use('/user/item', userItemRouter);
app.use('/character', charRouter);
app.use('/equipment', equipRouter);
app.use('/market', marketRouter);
app.use('/pet', petRouter);
app.use('/note', trianingRouter);
app.use('/other', otherRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
