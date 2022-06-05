
const bcrypt = require('bcrypt');
const e = require('express');


const handleNewUser = async(req, res) => {
    const db = require('../config/db');
    const { user,email,pwd,add } = req.body;
    if (!user || !pwd || !email || !add ) return res.status(400).json({ "message": "username and password and email and address are required." });
    let sql = `SELECT * from customer WHERE email = '${email}'`;
    try {
        const [rows, fields] = await db.promise().query(sql)
        let resault;
        resault =rows[0];
        
        if (resault?.email)
            return res.sendStatus(409); //Conflict
        else {
            const hashedPwd = await bcrypt.hash(pwd, 10);
            sql = `INSERT INTO customer (customer, address, email, pass) VALUES ('${user}', '${add}', '${email}', '${hashedPwd}');`
            const [rows, fields] = await db.promise().query(sql)
            res.status(201).json({ "success": `new user ${user} created!` });
        }
    } catch(err) {
        res.status(500).json({ "message": err.message });
        throw(err);
    }
}

module.exports = { handleNewUser };