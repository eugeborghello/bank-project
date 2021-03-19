const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const Account = new mongoose.Schema({
    cbu: {
        type: String,
        unique: true,
        required: true
    },

    currency:{
        type: String,
        enum: ['Pesos', 'Dolares'],
        required: true
    },

    userId: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }]

    
})

module.exports = mongoose.model('Accounts', Account);