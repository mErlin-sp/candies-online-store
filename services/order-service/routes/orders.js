const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const axios = require('axios');

// Create the connection pool. The pool-specific settings are the defaults
const dbPool = mysql.createPool({
    host: process.env.DB_SERVICE_NAME,
    user: 'db_user',
    password: 'db_user',
    database: 'db',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});

router.get('/orders', function (req, res) {
    dbPool.query('SELECT  *  FROM orders', (err, rows) => {
        if (err) {
            res.status(500).send('Database query error: ' + err)
        } else {
            res.json(rows)
        }
    })
});

router.get('/order/:order_id', function (req, res) {
    dbPool.query(`SELECT *
                  FROM orders
                  WHERE id = ${req.params.order_id}`, (err, rows) => {
        if (err) {
            res.status(500).send('Database query error: ' + err)
        } else {
            res.json(rows)
        }
    })
});

router.post('/submit-order', function (req, res) {
    dbPool.query(`INSERT INTO orders (customerName, customerPhone, customerAddress, productID, productQuantity)
                  VALUES ('${req.body.customerName}',
                          '${req.body.customerPhone}',
                          '${req.body.customerAddress}',
                          '${req.body.orderedProduct}',
                          '${req.body.orderedQuantity}')`, (insertErr, insertRes) => {
        if (!insertErr) {
            if (Object.hasOwn(req.body, 'promoText') && req.body.promoText) {
                axios.get(`http://${process.env.PROMO_SERVICE_NAME}:3003/api/promo-service/apply-promo/promo/${req.body.promoText}/order/${insertRes.insertId}`)
                    .then(function (promoRes) {
                        console.log(promoRes.data);
                        res.status(200).json({
                            orderID: insertRes.insertId
                        })
                    })
                    .catch(function (promoErr) {
                        console.log(promoErr.response.data)
                        res.status(promoErr.response.status).send(promoErr.response.data)
                    })
            } else {
                res.status(200).json({
                    orderID: insertRes.insertId
                })
            }
        } else {
            res.status(500).send('Database query error: ' + insertErr)
        }
    })
})

router.get('/close-order/:order_id', function (req, res) {
    dbPool.query(`UPDATE orders
                  SET status=1
                  WHERE id = ${req.params.order_id}`, (err) => {
        if (err) {
            res.status(500).send('Database query error: ' + err)
        } else {
            res.status(200).send('OK')
        }
    })
})
router.get('/delete-order/:order_id', function (req, res) {
    dbPool.query(`DELETE
                  FROM orders
                  WHERE id = ${req.params.order_id}`, (err) => {
        if (err) {
            res.status(500).send('Database query error: ' + err)
        } else {
            res.status(200).send('OK')
        }
    })
})

module.exports = router;
