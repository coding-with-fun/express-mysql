const mysql = require("mysql");

const mySqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testusers",
  multipleStatements: true,
});

module.exports = mySqlConnection;
