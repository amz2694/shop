const db = require('../config/db');
const bcrypt = require('bcrypt');

const handleGetuser = async (req,res) => {
    const email = req.email;
    let sql = `SELECT * from customer WHERE email = '${email}'`;
    try {
        const [rows, fields] = await db.promise().query(sql)
        let resault;
        resault =rows[0];
        res.status(200).json(resault);
    } catch(err) {
        res.status(500).json({ "message": err.message });
        throw(err);
    }
}

const handleChangeuser = async (req,res) => {
    let { user,pwd,add } = req.body;
    const email = req.email;
    let hashedPwd;
    let sql = `SELECT * from customer WHERE email = '${email}'`;
    console.log(user,pwd,add);
    try {
        const [rows, fields] = await db.promise().query(sql)
        let resault;
        resault =rows[0];
        if (user == undefined) {
            user = resault.customer;
        }
        if (pwd == undefined) {
            hashedPwd = resault.pass;
            console.log("pwd undefined",pwd)
        } else {
            console.log("pwd",pwd)
            hashedPwd = await bcrypt.hash(pwd, 10);
        }
        if (add == undefined) {
            add = resault.add;
        }
        console.log(user,hashedPwd,add);
        sql = `UPDATE customer SET customer = '${user}', pass='${hashedPwd}', address = '${add}' WHERE email = '${email}';`;
        await db.promise().query(sql)
        res.status(200).json({ "message": 'user changed' });

    } catch(err) {
        res.status(500).json({ "message": err.message });
        throw(err);
    }
}

const handleDeleteuser = async (req,res) => {
    const email = req.email;
    let sql = `DELETE FROM customer WHERE email='${email}';`;
    try {
        const [rows, fields] = await db.promise().query(sql)
        res.status(200).json({ "message": 'user deleted' });
    } catch(err) {
        res.status(500).json({ "message": err.message });
        throw(err);
    }
}

module.exports = { handleChangeuser, handleGetuser, handleDeleteuser };