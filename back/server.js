const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
var fs = require("fs");
var https = require("https");
const credentials = require('./middleware/credentials');
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

// app.use(errorHandler);


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