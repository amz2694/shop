const allowedOrigins = require('../config/allowedOrigins');

const credentials = (req,res,next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
    }
    // for (i in allowedOrigins) {
    //     console.log(allowedOrigins[i])
    //     res.setHeader('Access-Control-Allow-Origin', allowedOrigins[i]);
    // }
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.106:8080');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    next();
}

module.exports = credentials;