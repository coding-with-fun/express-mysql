const express = require("express");
const PeopleRoute = require("./People");

const Router = express.Router();

Router.use("/people", PeopleRoute);

module.exports = Router;
