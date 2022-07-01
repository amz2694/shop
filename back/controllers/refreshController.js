const jwt = require('jsonwebtoken');

const handleRefreshToken = async(req, res) => {
    const cookies = req.cookies;
    if (!cookies) return res.sendStatus(401);
    if (!cookies.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403);
            const accessToken = jwt.sign({
                    "userInfo": {
                        "email": decoded.email,
                    }
                },
                process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' }
            );
            res.json({ accessToken })
        }
    );
}
module.exports = { handleRefreshToken };