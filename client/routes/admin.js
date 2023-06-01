let express = require('express');
let router = express.Router();

router.get('/product-admin', function (req, res) {
    res.render('admin/product-admin', {title: 'Candies Online Store Product Admin Page'});
});

router.get('/order-admin', function (req, res) {
    res.render('admin/order-admin', {title: 'Candies Online Store Order Admin Page'});
});

module.exports = router;
