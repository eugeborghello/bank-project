const app = require('express').Router();
// Model user
const Users = require('../models/user');
var nodemailer = require('nodemailer');
const { generateCode } = require('../../utils/codeGen');

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

// Ruta para enviar notificacion por mail
app.post('/email', (req, res) => {
    const { subject, email } = req.body;
  
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'xtremerssports@gmail.com',
        pass: 'Hola123456!',
      },
    });
  
    transporter
      .sendMail({
        from: '"Veski" <veski@gmail.com>',
        to: email,
        subject: 'Password Reset',
        text: "Here's your code to reset your password: ",
      })
      .then((mail) => {
        res.status(200).json({
          message: 'Mail enviado correctamente',
          info: mail,
        });
      })
      .catch((error) => {
        res.status(404).json({
          message: 'Mail no enviado ' + error,
        });
      });
  });
  
  //
  app.patch('/forgot', async (req, res) => {
    try {
      const { userEmail } = req.body;
  
      const userfind = await Users.findOneAndUpdate(
        { email: userEmail },
        { resetCode: generateCode(6) },
        { new: true }
      );
      console.log('SOY------->', userfind);
      if (userfind) {
        res.status(200).json({
          message: 'Code generated correctly',
          user: userfind,
        });
      } else {
        res.status(400).json({
          message: 'User not found',
        });
      }
    } catch (error) {
      res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
    console.log('SOY------->', resetCode);
  });
  
  //
  app.patch('/resetpass', async (req, res) => {
    try {
      const { resetCode, userEmail, newPass } = req.body;
      console.log('soy----->', resetCode);
  
      const user = await Users.findOne({ email: userEmail });
      if (user && user.resetCode === resetCode) {
        user.password = newPass;
        await user.save();
        res.status(200).json({
          message: 'Password Updated correctly',
          user: user,
        });
      } else {
        res.status(400).json({
          message: 'User not found or reset code does not match',
        });
      }
    } catch (error) {
      res.status(400).json({
        message: 'Error: ' + error,
      });
    }
  });








module.exports = app;