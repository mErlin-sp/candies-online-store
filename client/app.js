const createError = require('http-errors');
const express = require('express');
// const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');

const app = express();

// app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);

// app.use('/api/product-catalog-service', (req, res) => {
//     // URL of the target microservice where the request should be redirected
//     const targetURL = 'http://localhost:3001'; // Example target URL
//     // Perform the redirect
//     res.redirect(req.method === 'POST' ? 307 : 302, targetURL + req.originalUrl);
// });
//
// app.use('/api/order-service', (req, res) => {
//     // URL of the target microservice where the request should be redirected
//     const targetURL = 'http://localhost:3002'; // Example target URL
//     // Perform the redirect
//     res.redirect(req.method === 'POST' ? 307 : 302, targetURL + req.originalUrl);
// });

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
