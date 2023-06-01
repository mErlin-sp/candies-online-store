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

router.get('/coupons', function (req, res) {
    dbPool.query('SELECT  *  FROM coupons', (sqlErr, rows) => {
        if (sqlErr) {
            res.status(500).send('Database query error: ' + sqlErr)
        } else {
            res.json(rows)
        }
    })
});

router.get('/apply-promo/promo/:promo_text/order/:order_id', function (req, res, next) {
    axios.get(`http://${process.env.ORDER_SERVICE_NAME}:3002/api/order-service/order/${req.params.order_id}`)
        .then(function (orderRes) {
            console.log(orderRes.data);
            if (orderRes.data.length > 0) {
                dbPool.query(`Update coupons
                              SET orderID = '${req.params.order_id}'
                              WHERE orderID IS NULL
                                AND promoText = '${req.params.promo_text}'
                              LIMIT 1`, (sqlErr, sqlRes) => {
                    if (!sqlErr) {
                        console.log(sqlRes)
                        if (sqlRes.changedRows > 0) {
                            res.status(200).send(`Coupon ${req.params.promo_text} successfully applied for order ${req.params.order_id}.`)
                        } else {
                            res.status(400).send('Invalid coupon.')
                        }
                    } else {
                        res.status(500).send('Database query error: ' + sqlErr)
                    }
                })
            } else {
                res.status(400).send('Order not found.')
            }
        })
        .catch(function (orderErr) {
            console.log(orderErr.message);
            res.status(orderErr.response.status).send(orderErr.message)
        })
});

module.exports = router;
