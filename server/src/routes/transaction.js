const app = require('express').Router();
// Model User
const Users = require('../models/user');
// Model Transaction
const Transaction = require('../models/transaction');

// Crear una transacciòn
app.post('/:userId', (req, res) => {
        const {userId} = req.params;
        const {amount} = req.body;

        Transaction.insertMany(({amount, user : userId}))
        .then(transaction => res.json(transaction))
        .catch(error => res.json(error))
});

// Traer todas las transacciones
app.get('/', (req, res) => {
    Transaction.find()
    // metodo populate sería como el include de sequelize
    .then(transactions => Users.populate(transactions, {path : "user"}))
    .then(transactions => res.json(transactions))
    .catch(error => res.json(error))
})


// Traer todas las transacciones de un usuario en particular a partir del id
app.get('/:idUser', (req, res) => {
    const {idUser} = req.params;
    Transaction.find({"user" : idUser})
    .then(transactions => Users.populate(transactions, {path : "user"}))
    .then(transactions => res.json(transactions))
    .catch(error => res.json(error))
})


// Traer todas las transacciones de un usuario en particular a partir del email
app.get('/email', (req, res) => {
    const {email} = req.body;
    Transaction.find()
    .then(transactions => Users.populate(transactions, {path : "user"}))
    .then(transaction => transaction.filter(tr => tr.user.email === email))
    .then(transaction => res.json(transaction))
    .catch(error => res.json(error))
})





module.exports = app;