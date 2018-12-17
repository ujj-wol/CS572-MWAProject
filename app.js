var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
let cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let postsRouter = require('./routes/posts');

var app = express();
// allow app to run behind any proxy
app.enable('trust proxy');
// not to reveal framework name to client
app.set('x-powered-by', false);
// route should be strict
app.set('strict routing', true);
// route should be case-sensitive 
app.set('case sensitive routing', true);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors({origin: '*'}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// setup routes
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);

// open our database connection
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://amjad1:asd123@ds135790.mlab.com:35790/mwa_project_db";

MongoClient.connect(url, function (err, database) {
  if (err) throw err;
  app.locals.db = database.db('mwa_project_db');
  // create an index on username for posts collection
  database.db('mwa_project_db').collection('posts').createIndex({username: 1});

  const port = process.env.PORT || 4000;
  app.listen(port,()=> console.log(`Listening at port ${port}`));
});

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
