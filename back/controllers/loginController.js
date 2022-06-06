const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const handleLogin = async(req, res) => {
    const { email, pwd } = req.body;
    if (!email || !pwd) return res.status(400).json({ "message": "email and password are required." });
    let sql = `SELECT * from customer WHERE email = '${email}'`;
    try {
        const [rows, fields] = await db.promise().query(sql)
        let resault;
        resault =rows[0];

        if (!resault?.email)
            return res.sendStatus(401); //Unauthorized
        else {
            const match = await bcrypt.compare(pwd, resault.pass);
            if (match) {
                // create jwt
                const accessToken = jwt.sign({
                        "userInfo": {
                            "email": resault.email,
                        }
                    },
                    process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' }
                );
                const refreshToken = jwt.sign({ "email": resault.email },
                    process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' }
                );

                res.cookie('jwt', refreshToken, { httpOnly: true,sameSite:'None', secure : true, maxAge: 24 * 60 * 60 * 1000 });
                res.json({ accessToken });
            } else {
                res.sendStatus(401);
            }
        }
    } catch(err) {
        res.status(500).json({ "message": err.message });
        throw(err);
    }
}

module.exports = { handleLogin };