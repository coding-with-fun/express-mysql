const bodyParser = require("body-parser");
const express = require("express");
const mySqlConnection = require("./utils/connection");
const PeopleRoutes = require("./routes/People");

const app = express();
app.use(bodyParser.json());

mySqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");

    app.listen(3000);
    app.use("/people", PeopleRoutes);
  } else {
    console.log("Error while connecting!!");
  }
});
