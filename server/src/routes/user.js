const app = require('express').Router();
// Model user
const Users = require('../models/user');
const UsersCtrl = require('../controllers/users')


// Traer todos los users
app.get('/', UsersCtrl.getUsers)
   


// Traer un usuario en particular
app.get('/:id', UsersCtrl.getUserId)


// login
app.post('/login', UsersCtrl.postLogin)
    
// Crear un nuevo usuario
app.post('/', UsersCtrl.createUser)



//Modificar informacion de un usuario
app.put('/:id', UsersCtrl.updateDataUser) 

// Ruta para enviar notificacion por mail
app.post('/email', UsersCtrl.sendEmail)

app.patch('/forgot', UsersCtrl.emailCode)
 
  
app.patch('/resetpass', UsersCtrl.passwordReset)
  



module.exports = app;