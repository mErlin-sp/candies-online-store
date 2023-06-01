const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

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

router.get('/products', function (req, res) {
    dbPool.query('SELECT  *  FROM products', (err, rows, fields) => {
        if (err) {
            res.status(500).send('Database query error: ' + err)
        } else {
            res.json(rows)
        }
    })
});

router.get('/product/:product_id', function (req, res) {
    dbPool.query(`SELECT *
                  FROM products
                  WHERE id = ${req.params.product_id}`, (err, rows, fields) => {
        if (err) {
            res.status(500).send('Database query error: ' + err)
        } else {
            res.json(rows)
        }
    })
});

router.post('/add-product', function (req, res) {
    dbPool.query(`INSERT INTO products (name, img, price)
                  VALUES ('${req.body.productName}',
                          '${req.body.productImg}',
                          '${req.body.productPrice}')`, (err) => {
        if (err) {
            res.status(500).send('Database query error: ' + err)
        } else {
            res.status(200).send('OK')
        }
    })
})

router.get('/delete-product/:product_id', function (req, res) {
    dbPool.query(`DELETE
                  FROM products
                  WHERE id = ${req.params.product_id}`, (err) => {
        if (err) {
            res.status(500).send('Database query error: ' + err)
        } else {
            res.status(200).send('OK')
        }
    })
})

module.exports = router;
