const app = require("express").Router();
const authUser = require("../middleware/authUserToken");
const ContactCtrl = require('../controllers/contact');

app.post('/:id', ContactCtrl.createContact);
app.get('/:id', ContactCtrl.getContacts);
app.delete('/:id', ContactCtrl.deleteContact);
app.put('/:id', ContactCtrl.editContact);

module.exports = app;
