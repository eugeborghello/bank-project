const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const Contacts = new mongoose.Schema({
    name: {
        type: String,
      },
      email: {
        type: String,
      },
      CBU: {
        type: String,
      },
      
      
      lastName: {
        type: String,
      },
      
     
      
      
      
})

module.exports = mongoose.model("Contacts", Contacts);