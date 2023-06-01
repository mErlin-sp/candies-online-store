CREATE TABLE IF NOT EXISTS `orders`
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

INSERT INTO orders(customerName, customerPhone, customerAddress, productID, productQuantity)
VALUES ('Customer 1', '+380981001010', 'Kyiv', 0, 5),
       ('Customer 2', '+380981001010', 'Odesa', 1, 5),
       ('Customer 3', '+380981001010', 'Berlin', 2, 5),
       ('Customer 4', '+380981001010', 'Tokyo', 3, 5),
       ('Customer 5', '+380981001010', 'Paris', 4, 5);