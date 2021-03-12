const app = require('express').Router();
// Model user
const Users = require('../models/user');

// Traer todos los users
app.get('/', (req, res) => {
    Users.find()
    .then(users => res.json(users))
    .catch(error => res.json(error))
})

// Traer un usuario en particular
app.get('/:id', (req, res) => {
    const {id} = req.params;
    Users.findOne({"_id" : id})
    .then(user => res.json(user))
    .catch(error => res.json(error))
})

// login
app.post('/login', (req, res )=> {
     email = req.body.email,
     password = req.body.password

    Users.findOne({emai: email, password: password})
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

// Crear un nuevo usuario
app.post('/', (req, res) => {
    var nuevoUser;
    const {name, lastName, email, password, address, dni} = req.body;
    Users.insertMany(({name, lastName, email, password, address, dni}))
    .then(user => {
        nuevoUser = user[0];
        return nuevoUser.encryptPassword(password);
    })
    .then(nuevoPass => {
        nuevoUser.password = nuevoPass;
        return nuevoUser.save()
    })
    .then(user => res.json(user))
    .catch(error => res.json(error))
})


//Modificar informacion de un usuario
app.put('/:id', (req, res) => {
    const {id} = req.params;
    const cambios = req.body;

    Users.findByIdAndUpdate(id, cambios, (err, userUpdate) =>{
        console.log(cambios)
        if(err) res.status(500).send({message :`Error al actualizar datos del usuario: ${err}`})

        res.status(200).send({ users: userUpdate })
        
    })
})








module.exports = app;