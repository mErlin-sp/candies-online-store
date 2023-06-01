const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const ordersRouter = require('./routes/orders');

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/order-service', ordersRouter);

module.exports = app;
