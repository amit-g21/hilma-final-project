let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

console.log('Listening on port 8000');

let cors = require('cors');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/userInfo');
let userPassword = require('./routes/userPassword');
let collectionRouter = require('./routes/collection');
let variantRouter = require('./routes/variant');
let productRouter = require('./routes/product');
let orderRouter = require('./routes/orderItems');
let actionRouter = require('./routes/action');
let purchasedProductRouter = require('./routes/purchasedProduct');
let validateLogin = require('./routes/validateLogin');
var cors = require('cors');


let app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/userinfo', usersRouter);
app.use('/userpassword', userPassword);
app.use('/collection', collectionRouter);
app.use('/variant', variantRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('/action', actionRouter);
app.use('/purchasedProduct', purchasedProductRouter);
app.use('/login', validateLogin);



module.exports = app;
