const mongoose = require("mongoose");
const Transactions = require('../models/transactions/index');
const Accounts = mongoose.model("Accounts");

const numTransaction = async () => {

    var num = Math.floor(Math.random() * 999999).toString()

    const dato = await Transactions.findOne({
        where: { numTransaction: num }
    })

    if (!dato) {
        return num;
    } else {
        return numTransaction();
    }
}

exports.cashDeposit = async (req, res) => {
    const numTransac = await numTransaction();
    const { id, amount } = req.body
    const amountNumber = amount * 1;
    try {
        //validate card
        const account = await Accounts.findOne({ _id: id })
        const transaction = await Transactions.create({
            numTransaction: numTransac,
            state: 'complete',
            amountNumber,
            description: 'deposit',
            movement_type: 'deposits',
            accountId: account.id
        })
        var oldBalance = account.balance
        account.balance = oldBalance + amountNumber;
        account.save();
        if (account && transaction) {
            console.log(account);
            res.status(200).json({ status: "success", operation: { transaction: transaction, newBalance: account.balance } })
        } else {
            throw new Error("Something was wrong")
        }

    } catch (err) {
        res.json({ status: "error", message: err.message })
    }

}
exports.cashExtraction = async (req, res) => {
    const numTransac = await numTransaction();
    const { id, amount } = req.body;
    const amountNumber = amount * 1;
    try {
        //validate card
        const account = await Accounts.findOne({ _id: id })
        const transaction = await Transactions.create({
            numTransaction: numTransac,
            state: 'complete',
            amount,
            description: 'extraction',
            movement_type: 'extraction',
            accountId: account.id
        })

        var oldBalance = account.balance
        account.balance = oldBalance - amountNumber;
        account.save();
        if (account && transaction) {
            res.status(200).json({
                status: "error",
                operation: transaction,
                newBalance: account.balance
            });
        } else {
            throw new Error("Something was wrong")
        }

    } catch (err) {
        res.status(400).json({ status: "error", message: err.message });
    }
}