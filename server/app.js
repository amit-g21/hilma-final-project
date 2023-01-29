let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

console.log('Listening on port 8000');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/userInfo');
let userPassword = require('./routes/userPassword');
let collectionRouter = require('./routes/collection');
let productRouter = require('./routes/product');
let actionRouter = require('./routes/action');
let purchasedProductRouter = require('./routes/purchasedProduct');


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/userinfo', usersRouter);
app.use('/userpassword', userPassword);
app.use('/collection', collectionRouter);
app.use('/product', productRouter);
app.use('/action', actionRouter);
app.use('/purchasedProduct', purchasedProductRouter);

module.exports = app;
