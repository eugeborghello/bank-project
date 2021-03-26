const app = require("express").Router();
// Model user
const Users = require("../models/user");
const Account = require("../models/account");
const Transaction = require('../models/transaction')
const TransactionCtrl = require("../controllers/transaction");
const authUser = require("../middleware/authUserToken");

// [authUser],
// app.get("/:id",  AccountsCtrl.getAccount);
app.post("/", TransactionCtrl.createTransaction);

module.exports = app;