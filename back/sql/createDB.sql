CREATE DATABASE shop;

USE shop;

CREATE TABLE customer (
    customerID int NOT NULL,
    customer varchar(255),
    address varchar(255),
    email varchar(255),
    pass varchar(255),
    PRIMARY KEY (customerID)
);

CREATE TABLE status (
    statusID int NOT NULL,
    status varchar(255),
    PRIMARY KEY (statusID)
);

CREATE TABLE payment (
    paymentID int NOT NULL,
    payment varchar(255),
    PRIMARY KEY (paymentID)
);

CREATE TABLE commodity (
    commodityID int NOT NULL,
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
    invoiceID int NOT NULL,
    commodityID int,
    paymentID int,
    statusID int,
    date DATE,
    time TIME,
    trackingCode int,
    FOREIGN KEY (statusID) REFERENCES status(statusID),
    FOREIGN KEY (paymentID) REFERENCES payment(paymentID),
    FOREIGN KEY (commodityID) REFERENCES commodity(commodityID),
    PRIMARY KEY (invoiceID)
);

CREATE TABLE picture (
    pictureID int NOT NULL,
    pictureURL varchar(255),
    commodityID int,
    FOREIGN KEY (commodityID) REFERENCES commodity(commodityID),
    PRIMARY KEY (pictureID)
);

CREATE TABLE cart (
    cartID int NOT NULL,
    invoiceID int,
    commodityID int,
    quantity int,
    perOnePrice int,
    FOREIGN KEY (invoiceID) REFERENCES salesInvoice(invoiceID),
    FOREIGN KEY (commodityID) REFERENCES commodity(commodityID),
    PRIMARY KEY (cartID)
);