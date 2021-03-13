const mongoose = require('mongoose');

/* const schemaOptions = {
    timestamps: { createdAt: 'created_at'},
  }; */

const Transaction = new mongoose.Schema({
    amount: {
        type : Number, required : true
    },
    user: { type: mongoose.Schema.ObjectId, ref: "Users" } 
    
}, { timestamps: true });


module.exports = mongoose.model('Transaction', Transaction);
