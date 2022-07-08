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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
}

module.exports = credentials;