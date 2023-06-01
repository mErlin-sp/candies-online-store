CREATE TABLE IF NOT EXISTS `products`
(
    `id`    INT(20) AUTO_INCREMENT,
    `img`   VARCHAR(500) DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    `name`  VARCHAR(100) NOT NULL,
    `price` FLOAT(20)    DEFAULT '0.0',
    PRIMARY KEY (`id`)
);

INSERT INTO products (name, img, price)
VALUES ('Gourmet Salt Water Taffy - 5lb',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/products/Gourmet-Salt-Water-Taffy-5lb-CandyStore-com-768.jpg?v=1677140500&width=720',
        20.99),
       ('Gilliam Hard Candy Sticks - 80ct',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/products/Gilliam-Hard-Candy-Sticks-80ct-CandyStore-com-942.jpg?v=1677138442&width=720',
        28.99),
       ('Sour Patch Kids Assorted - 5lb',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/products/Sour-Patch-Kids-Assorted-5lb-CandyStore-com-920.jpg?v=1677175842&width=720',
        28.99),
       ('Peach Os Gummi Rings - 5lb',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/products/Peach-Os-Gummi-Rings-5lb-CandyStore-com-478.jpg?v=1677163595&width=720',
        25.99),
       ('Assorted Fruit Sours Candy Balls - 5lb',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/products/Assorted-Fruit-Sours-Candy-Balls-5lb-CandyStore-com-271.jpg?v=1677660478&width=720',
        37.99),
       ('Rainbow Whirly Pops 3" - 60ct',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/products/Rainbow-Whirly-Pops-3-60ct-CandyStore-com-622.jpg?v=1677169732&width=720',
        175.99);