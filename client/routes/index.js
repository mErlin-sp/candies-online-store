const express = require('express');
const axios = require("axios");
let router = express.Router();

// Home Page
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Candies Online Store',
        email: 'candies-online-store@gmail.com',
        phone: '+380982002020'
    });
});

// Checkout Page
router.get('/new-order/:product_id', function (req, res) {
    // Make a GET request to the Product Service
    axios.get(`http://${process.env.PRODUCT_CATALOGUE_SERVICE_NAME}:3001/api/product-catalog-service/product/${req.params.product_id}`)
        .then(function (response) {
            if (response.data.length === 0) {
                res.status(500).send('Error loading product data. Product with this ID does not exist.')
                return
            }
            res.render('new-order', {
                title: 'Order Checkout',
                product: response.data[0]
            });
        })
        .catch(function (error) {
            console.error('Error:', error.message)
            res.status(500).send('Error loading product data. Maybe Product Service is down.')
        })
});


module.exports = router;
