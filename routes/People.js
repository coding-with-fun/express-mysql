const mySqlConnection = require("../utils/connection");
const express = require("express");

const Router = express.Router();

Router.get("/", (req, res) => {
  mySqlConnection.query("SELECT * from people", (err, rows, fields) => {
    if (!err) {
      res.json({
        data: rows,
      });
    } else {
      console.log(err);
    }
  });
});

Router.post("/", (req, res) => {
  const name = req.body.name;
  const query = `INSERT INTO \`people\`(\`name\`) VALUES ("${name}")`;
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.json({
        data: rows,
      });
    } else {
      console.log(err);
    }
  });
});

Router.delete("/", (req, res) => {
  const name = req.body.name;
  const query = `DELETE FROM \`people\` WHERE name = "${name}"`;
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.json({
        data: rows,
      });
    } else {
      console.log(err);
    }
  });
});

Router.put("/", (req, res) => {
  const newName = req.query.newName;
  const oldName = req.body.oldName;

  const query = `UPDATE \`people\` SET \`name\` = "${newName}" WHERE \`name\` = "${oldName}"`;
  mySqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.json({
        data: rows,
      });
    } else {
      console.log(err);
    }
  });
});

module.exports = Router;
