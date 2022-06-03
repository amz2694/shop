const mysql = require('mysql');

const db = mysql.createConnection({
	host:"localhost",
	user:"admin",
	password:"admin",
	multipleStatements: true
});

module.exports = db;