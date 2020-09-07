// Connect to MySQL
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Auburn',
    database: 'burger_db'
  });

connection.connect((err) => {
  if (err) {
    console.log(`Error connecting: ${err.stack}`);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection to ORM
module.exports = connection;