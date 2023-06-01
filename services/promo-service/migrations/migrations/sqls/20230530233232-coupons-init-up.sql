CREATE TABLE IF NOT EXISTS `coupons`
(
    `id`             INT         NOT NULL AUTO_INCREMENT,
    `promoText`      VARCHAR(20) NOT NULL,
    `name`           VARCHAR(50) NOT NULL,
    `description`    VARCHAR(200),
    `expirationDate` DATETIME,
    `orderID`        INT DEFAULT NULL,
    PRIMARY KEY (`id`)
);

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