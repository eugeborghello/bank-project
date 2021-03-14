const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = new mongoose.Schema({
    name: {
        type: String
        
    },
    lastName: {
        type: String
        
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


User.methods.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
}

User.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
} 

module.exports = mongoose.model('Users', User)
