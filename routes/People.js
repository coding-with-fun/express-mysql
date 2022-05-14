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

module.exports = Router;
