const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
var fs = require("fs");
const path = require('path');
var https = require("https");
const credentials = require('./middleware/credentials');
const db = require('./config/db');
const PORT = process.env.PORT || 8000;
require('dotenv').config();

// cross origin resource sharing
app.use(credentials);

// built-in middleware to handle urlencoded data
app.use(express.urlencoded({ extended: true }));

// built-in middleware for json
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// routes
app.use('/api/v1/register', require('./routes/register'));
app.use('/api/v1/login', require('./routes/login'));
app.use('/api/v1/refresh', require('./routes/refresh'));
app.use('/api/v1/user', require('./routes/user'));
app.use('/api/v1/gender', require('./routes/gender'));

// app.use(errorHandler);
const cdb = fs.readFileSync(path.join(__dirname, './sql/createDB.sql')).toString();
db.connect( err => {
    if (err) throw err;
    console.log("Connected to DB!");
    https
        .createServer(
            {
            key: fs.readFileSync("key.pem"),
            cert: fs.readFileSync("cert.pem"),
            },
            app
        )
        .listen(PORT, () => {
            console.log(`serever is runing at port ${PORT}`);
        });
    // db.query(cdb, (err, result) => {
    //   if (err) throw err;
    //   console.log("Database created");
    // });
});