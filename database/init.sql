-- Create tables
CREATE TABLE `products`
(
    `id`    INT(20) AUTO_INCREMENT,
    `img`   VARCHAR(500) DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
    `name`  VARCHAR(100) NOT NULL,
    `price` FLOAT(20)    DEFAULT '0.0',
    PRIMARY KEY (`id`)
);

CREATE TABLE `orders`
(
    `id`              INT(20) AUTO_INCREMENT,
    `creationTime`    TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
    `customerName`    VARCHAR(50)  NOT NULL,
    `customerPhone`   VARCHAR(20)  NOT NULL,
    `customerAddress` VARCHAR(200) NOT NULL,
    `productID`       INT(20)      NOT NULL,
    `productQuantity` INT(20)    DEFAULT '1',
    `status`          TINYINT(1) DEFAULT '0',
    PRIMARY KEY (`id`)
);

CREATE TABLE `coupons`
(
    `id`             INT         NOT NULL AUTO_INCREMENT,
    `promoText`      VARCHAR(20) NOT NULL,
    `name`           VARCHAR(50) NOT NULL,
    `description`    VARCHAR(200),
    `expirationDate` DATETIME,
    `orderID`        INT DEFAULT NULL,
    PRIMARY KEY (`id`)
);

-- Insert some sample data
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

INSERT INTO orders(customerName, customerPhone, customerAddress, productID, productQuantity)
VALUES ('Customer 1', '+380981001010', 'Kyiv', 0, 5),
       ('Customer 2', '+380981001010', 'Odesa', 1, 5),
       ('Customer 3', '+380981001010', 'Berlin', 2, 5),
       ('Customer 4', '+380981001010', 'Tokyo', 3, 5),
       ('Customer 5', '+380981001010', 'Paris', 4, 5);

INSERT INTO coupons(promoText, name, description)
VALUES ('SAVE30', '30% discount', '30% discount for any order'),
       ('SAVE30', '30% discount', '30% discount for any order'),
       ('SAVE40', '40% discount', '40% discount for any order'),
       ('SAVE40', '40% discount', '40% discount for any order'),
       ('SAVE45', '45% discount', '45% discount for any order'),
       ('SAVE45', '45% discount', '45% discount for any order'),
       ('SAVE45', '45% discount', '45% discount for any order'),
       ('SAVE45', '45% discount', '45% discount for any order'),
       ('SAVE45', '45% discount', '45% discount for any order'),
       ('SAVE45', '45% discount', '45% discount for any order'),
       ('SAVE45', '45% discount', '45% discount for any order'),
       ('SAVE45', '45% discount', '45% discount for any order'),
       ('SAVE45', '45% discount', '45% discount for any order')


