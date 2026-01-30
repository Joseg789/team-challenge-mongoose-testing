const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const routes = require("./routes/routes"); //busca el archivo index por defecto9

const dbConnection = require("./config/config");

app.use(express.json());
app.use(express.urlencoded());

app.use("/", routes);

dbConnection();

module.exports = app;
