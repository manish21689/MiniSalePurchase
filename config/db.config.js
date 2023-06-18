const mysql = require('mysql');
const mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manish123',
    database: 'inventory_database'
});
mysqlConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = mysqlConn;