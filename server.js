const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");
const bodyParser = require("body-parser");
const express = require("express");
const mySqlConnection = require("./utils/connection");
const Router = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

mySqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");

    app.listen(3000);
    app.use("/", Router);
  } else {
    console.log("Error while connecting!!");
  }
});
