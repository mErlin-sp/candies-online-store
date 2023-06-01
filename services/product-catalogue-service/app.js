const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const productsRouter = require('./routes/products');

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/product-catalog-service/', productsRouter);

module.exports = app;
