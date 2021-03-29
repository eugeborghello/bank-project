const app = require("express").Router();
// Model user
const Users = require("../models/user");
const Account = require("../models/account");
const AccountsCtrl = require("../controllers/accounts");
const Contacts = require('../models/contacts/index')

const ContactsCtrl = require("../controllers/contacts");
 
app.post("/:id", ContactsCtrl.createContact);
// app.delete("/:id", [authUser], AccountsCtrl.deleteAccount);

module.exports = app;
