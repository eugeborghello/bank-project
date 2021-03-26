const app = require("express").Router();
const TransactionsCtrl = require("../controllers/transaction");

app.patch("/deposit", TransactionsCtrl.cashDeposit);
app.post("/extraction",TransactionsCtrl.cashExtraction);


module.exports = app;
