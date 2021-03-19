const app = require('express').Router();
// Model user
const Users = require('../models/user');
const Account = require('../models/account');
const AccountsCtrl = require('../controllers/accounts')

app.get('/:id', AccountsCtrl.getAccount)
app.post('/:id', AccountsCtrl.createAccount)
app.delete('/:id', AccountsCtrl.deleteAccount)

module.exports = app;