let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

console.log('Listening on port 8000');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/userInfo');
let collectionRouter = require('./routes/collection');


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/userinfo', usersRouter);
app.use('/collection', collectionRouter);

module.exports = app;
