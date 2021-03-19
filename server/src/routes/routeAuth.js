const app = require('express').Router();
const UsersCtrl = require('../controllers/auth');
const authUser= require('../middleware/authUserToken')





// login
app.post('/login', [authUser], UsersCtrl.postLogin)

// obtener perfil del usuario



// Crear un nuevo usuario
app.post('/', UsersCtrl.createUser)

module.exports = app