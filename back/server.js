const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
var fs = require("fs");
const path = require('path');
var https = require("https");
const credentials = require('./middleware/credentials');
const corsOptions = require('./config/corsOption');
const db = require('./config/db');
const PORT = process.env.PORT || 8000;
require('dotenv').config();

// cross origin resource sharing
app.use(credentials);
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve('./public')));
//app.use(express.static('public'));

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
app.use('/api/v1/discount', require('./routes/discount'));
app.use('/api/v1/newest', require('./routes/newest'));
app.use('/api/v1/product', require('./routes/product'));
app.use('/api/v1/cart', require('./routes/cart'));
app.use('/api/v1/getcart', require('./routes/getcart'));
app.use('/api/v1/search', require('./routes/search'));

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