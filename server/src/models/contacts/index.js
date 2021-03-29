const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const Contacts = new mongoose.Schema({
    name: {
        type: String,
      },
      email: {
        type: String,
      },
      accounts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Account",
        },
      ],
      user : [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      contactId : 
        {
          type: String,
         
        },
      
      
})

module.exports = mongoose.model("Contacts", Contacts);