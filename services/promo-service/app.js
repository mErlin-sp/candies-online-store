const express = require('express');
const logger = require('morgan');

const promoRouter = require('./routes/promo');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/promo-service', promoRouter);

module.exports = app;
