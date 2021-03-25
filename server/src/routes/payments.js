const app = require("express").Router();
const PaymentsCtrl = require("../controllers/payments");

app.get("/", PaymentsCtrl.getTransactions);


module.exports = app;
