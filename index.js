const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const route = require("./routes");

const app = express();

app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/", route);

module.exports = {
  app,
};
