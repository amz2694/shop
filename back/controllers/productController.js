const db = require('../config/db');

const handleProduct = async(req,res) => {
    const ID = req.query.ID;
    let sql = `SELECT * from commodity WHERE commodityID = ${ID}`;
    try {
        const [rows, fields] = await db.promise().query(sql)
        let resault;
        resault =rows;
        sql = `SELECT pictureURL FROM picture WHERE commodityID = ${ID}`;
        let pictureQuery = await db.promise().query(sql);
        let pictureURL = pictureQuery[0][0]?.pictureURL;
        resault[0].pictureURL = pictureURL;
        res.status(200).json(resault);
    } catch(err) {
        res.status(500).json({ "message": err.message });
        throw(err);
    }
}

module.exports = {handleProduct} ;