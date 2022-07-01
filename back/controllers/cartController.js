const db = require('../config/db');

const handleCart = async(req,res) => {
    const { payment,cart } = req.body;
    const email = req.email
    if (!payment || !cart) return res.status(400).json({ "message": "payment and cart are required." });
    let sql = `SELECT customerID from customer WHERE email = '${email}'`;
    let date = new Date();
    let time= new Date().toLocaleTimeString().split(' ')[0];
    let sqlDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
    try {
        let [rows, fields] = await db.promise().query(sql);
        const customerID =rows[0].customerID;
        sql = `SELECT paymentID from payment WHERE payment = '${payment}'`;
        [rows, fields] = await db.promise().query(sql);
        const paymentID =rows[0].paymentID;
        const nsql = `INSERT INTO salesInvoice (customerID, paymentID, statusID, date, time) VALUES (${customerID}, ${paymentID}, 1, '${sqlDate}', '${time}');`;
        await db.promise().query(nsql);
        sql = `SELECT invoiceID from salesInvoice WHERE customerID = ${customerID} AND paymentID = ${paymentID} AND date = '${sqlDate}' AND time = '${time}'`
        const invoiceIDQuery = await db.promise().query(sql)
        const invoiceID =invoiceIDQuery[0][0].invoiceID;
        for (i in cart) {
            sql = `SELECT price from commodity WHERE commodityID = '${cart[i].ID}'`
            const priceQuery = await db.promise().query(sql);
            const commodityID = cart[i].ID;
            const price = priceQuery[0][0].price;
            const quantity = cart[i].quantity;
            let msql = `INSERT INTO cart (invoiceID, commodityID, quantity, perOnePrice) VALUES (${invoiceID}, ${commodityID}, ${quantity}, '${price}');`;
            await db.promise().query(msql);
        }

        res.status(201).json({ "success": `created!` });
    } catch(err) {
        res.status(500).json({ "message": err.message });
        throw(err);
    }
}

module.exports = {handleCart} ;