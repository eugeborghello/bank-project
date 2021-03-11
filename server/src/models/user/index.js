const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    lastName: {
        type: String,
        required: 'lastname is required'
    },
    email: {
        type: String,
        required: 'email is required'
    },
    password: {
        type: String,
        required: 'password is required'
    },
    address: String,
    dni: Number,
})


module.exports = mongoose.model('User', User)
