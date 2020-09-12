  // Import ORM
const orm = require('../config/orm.js');

const mysql = require("mysql");
const dbConfig = require('../config/connection.js');

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;

const burgers = {
  all: (cb) => {
    orm.all('burgers', (res) => cb(res));
  },
  create: (cols, vals, cb) => {
    orm.create('burgers', cols, vals, (res) => cb(res));
  },
  update: (objColsVals, condition, cb) => {
    orm.update('burgers', objColsVals, condition, (res) => cb(res));
  }
};

// Export DB functions
module.exports = burgers;