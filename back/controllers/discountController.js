const db = require('../config/db');

const handleDiscount = async(req,res) => {
    let sql = `SELECT * from commodity WHERE NOT discount = 0 AND discount IS NOT NULL`;
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

module.exports = {handleDiscount} ;