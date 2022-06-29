const db = require('../config/db');

const handleNewest = async(req,res) => {
    let sql = `SELECT * from commodity ORDER BY commodityID DESC LIMIT 15`;
    try {
        const [rows, fields] = await db.promise().query(sql)
        let resault;
        resault =rows;
        res.status(200).json(resault);
    } catch(err) {
        res.status(500).json({ "message": err.message });
        throw(err);
    }
}

module.exports = {handleNewest} ;