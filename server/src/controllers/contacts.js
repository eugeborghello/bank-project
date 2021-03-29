const mongoose = require('mongoose');
const user = require('../models/user');
const Contacts = mongoose.model('Contacts');
const Users = mongoose.model('Users');





exports.createContact = async(req, res) => {
  
   
  const userId = req.params.id;
  
    try {
        const newContact = await Contacts.create(req.body)
        const user = await Users.findById(userId)
        console.log(user)
        user.contacts.push(newContact)
        await user.save()
        return res.status(201).json(newContact)
    } catch ( err ) {
        return res.status(500).json({ message: 'Something went wrong'})
    }
  }
