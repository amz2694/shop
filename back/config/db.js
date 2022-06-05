const mysql = require('mysql2');

const db = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"2222",
	database: 'shop',
	multipleStatements: true
});

module.exports = db;