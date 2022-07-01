const db = require('../config/db');

const handleGetcart = async(req,res) => {
    const email = req.email
    let sql = `SELECT customerID from customer WHERE email = '${email}'`;
    try {
        let [rows, fields] = await db.promise().query(sql);
        const customerID =rows[0].customerID;
        sql = `SELECT * FROM salesInvoice WHERE customerID= '${customerID}'`;
        let invoiceQuery = await db.promise().query(sql);
        let invoices = invoiceQuery[0];
        const response = []
        for (i in invoices) {
            let paymentID = invoices[i].paymentID;
            sql = `SELECT payment FROM payment WHERE paymentID = ${paymentID}`;
            let paymentQuery = await db.promise().query(sql);
            let payment = paymentQuery[0][0].payment;
            let statusID = invoices[i].statusID;
            sql = `SELECT status FROM status WHERE statusID = ${statusID}`;
            let statusQuery = await db.promise().query(sql);
            let status = statusQuery[0][0].status;

            sql = `SELECT * FROM cart WHERE invoiceID = '${invoices[i].invoiceID}'`;
            let cartQuery = await db.promise().query(sql);
            let cart = cartQuery[0];
            let item = {
                "payment" : payment,
                "status" : status,
                "date" : invoices[i].date,
                "time" : invoices[i].time,
                "trackingCode" : invoices[i].invoiceID,
                "cart" : cart
            }
            response.push(item)
        }
        res.json(response)
    } catch(err) {
        res.status(500).json({ "message": err.message });
        throw(err);
    }
}

module.exports = {handleGetcart} ;