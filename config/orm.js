// Use MySQL connection
const connection = require('./connection.js');

// Function looping through an array, then we turn said array into a string 
const printQuestionMarks = (num) => {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
        // Incorporate SQL query here
      arr.push('?');
    }
  
    return arr.toString();
  };
  
// Convert to SQL syntax
  const objToSql = (ob) => {
    let arr = [];
  
    for (const key in ob) {
      let value = ob[key];
  
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = `'${value}'`;
        }
        arr.push(`${key}=${value}`);
      }
    }
    return arr.toString();
  };
  
  // Object containing SELECT, INSERT, UPDATE (further SQL syntax)
  const orm = {
    all: (tableInput, cb) => {
      let queryStr = `SELECT * FROM ${tableInput};`;
      connection.query(queryStr, (err, res) => {
        if (err) throw err;
  
        cb(res);
      });
    },
    create: (table, cols, vals, cb) => {
      let queryStr = `INSERT INTO ${table} (${cols.toString()}) `;
      queryStr += `VALUES (${printQuestionMarks(vals.length)})`;
  
      connection.query(queryStr, vals, (err, res) => {
        if (err) throw err;
  
        cb(res);
      });
    },
    update: (table, objColsVals, condition, cb) => {
      let queryStr = `UPDATE ${table}`;
      queryStr += ` SET ${objToSql(objColsVals)}`;
      queryStr += ` WHERE ${condition}`;
  
      connection.query(queryStr, (err, res) => {
        if (err) throw err;
  
        cb(res);
      });
    }
  };

// Export orm
module.exports = orm;