const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const Transactions = new mongoose.Schema({
    state: {
        type: String,
        enum: ['transfer', 'load', 'payment','complete']
    },
    movement_type: {
        type: String,
        enum: ["deposits", "extraction","payment"]
    },

    amountNumber: {
        type: Number
    },
    description: {
        type: String
    },
    numTransaction: {
        type: Number,
    }
});
module.exports = mongoose.model('Transactions', Transactions);
