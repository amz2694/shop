const db = require('../config/db');

const handlecomment = async(req,res) => {
    const ID = req.query.ID;
    let sql = `SELECT * from comments WHERE commodityID = ${ID}`;
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

module.exports = {handlecomment} ;