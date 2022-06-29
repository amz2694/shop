const db = require('../config/db');

const handlegender = async(req,res) => {
    const gender = req.query.gender;
    let sql = `SELECT * from commodity WHERE gender = '${gender}'`;
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

module.exports = { handlegender };