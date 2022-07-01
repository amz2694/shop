const db = require('../config/db');

const handleSearch = async(req,res) => {
    const search = req.query.search;
    let sql = `SELECT * from commodity WHERE commodityName like '%${search}%'`;
    if (!search ) return res.status(400).json({ "message": "search is required." });
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

module.exports = {handleSearch} ;