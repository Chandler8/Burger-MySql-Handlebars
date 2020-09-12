// Connect to MySQL
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Auburn',
    database: 'burger_db'
  });

  module.exports = {
    HOST: "us-cdbr-east-02.cleardb.com",
    USER: "b9485f7de3b34d",
    PASSWORD: "c6d4edd2",
    DB: "heroku_30d89f8a71a1d8a"
  };

connection.connect((err) => {
  if (err) {
    console.log(`Error connecting: ${err.stack}`);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection to ORM
module.exports = connection;