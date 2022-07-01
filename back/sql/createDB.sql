CREATE DATABASE shop;

CREATE TABLE customer (
    customerID int NOT NULL AUTO_INCREMENT,
    customer varchar(255),
    address varchar(255),
    email varchar(255),
    pass varchar(255),
    PRIMARY KEY (customerID)
);

CREATE TABLE status (
    statusID int NOT NULL AUTO_INCREMENT,
    status varchar(255),
    PRIMARY KEY (statusID)
);

CREATE TABLE payment (
    paymentID int NOT NULL AUTO_INCREMENT,
    payment varchar(255),
    PRIMARY KEY (paymentID)
);

CREATE TABLE commodity (
    commodityID int NOT NULL AUTO_INCREMENT,
    commodityName varchar(255),
    gender varchar(255),
    startingOdor varchar(255),
    middleOdor varchar(255),
    finalOdor varchar(255),
    volume int,
    price int,
    discount int,
    PRIMARY KEY (commodityID)
);

CREATE TABLE salesInvoice (
    invoiceID int NOT NULL AUTO_INCREMENT,
    customerID int,
    paymentID int,
    statusID int,
    date DATE,
    time TIME,
    trackingCode int,
    FOREIGN KEY (statusID) REFERENCES status(statusID),
    FOREIGN KEY (paymentID) REFERENCES payment(paymentID),
    FOREIGN KEY (customerID) REFERENCES customer(customerID),
    PRIMARY KEY (invoiceID)
);

CREATE TABLE picture (
    pictureID int NOT NULL AUTO_INCREMENT,
    pictureURL varchar(255),
    commodityID int,
    FOREIGN KEY (commodityID) REFERENCES commodity(commodityID),
    PRIMARY KEY (pictureID)
);

CREATE TABLE cart (
    cartID int NOT NULL AUTO_INCREMENT,
    invoiceID int,
    commodityID int,
    quantity int,
    perOnePrice int,
    FOREIGN KEY (invoiceID) REFERENCES salesInvoice(invoiceID),
    FOREIGN KEY (commodityID) REFERENCES commodity(commodityID),
    PRIMARY KEY (cartID)
);

CREATE TABLE comments (
    commentID int NOT NULL AUTO_INCREMENT,
    commodityID int NOT NULL,
    customerID int NOT NULL,
    fatherID int,
    text varchar(255),
    date DATE,
    time TIME,
    FOREIGN KEY (customerID) REFERENCES customer(customerID),
    FOREIGN KEY (commodityID) REFERENCES commodity(commodityID),
    PRIMARY KEY (commentID)
);