const app = require('express').Router();
// Model user
const Users = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
const { generateCode } = require('../../utils/codeGen');

// Traer todos los users
app.get('/', (req, res) => {
  Users.find()
    .then((users) => res.json(users))
    .catch((error) => res.json(error));
});

// Traer un usuario en particular
app.get('/:id', (req, res) => {
  const { id } = req.params;
  Users.findOne({ _id: id })
    .then((user) => res.json(user))
    .catch((error) => res.json(error));
});

// login
app.post('/login', (req, res) => {
  (email = req.body.email), (password = req.body.password);

  Users.findOne({ emai: email, password: password })
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

// Crear un nuevo usuario
app.post('/', (req, res) => {
  var nuevoUser;
  const { name, lastName, email, password, address, dni } = req.body;
  Users.insertMany({ name, lastName, email, password, address, dni })
    .then((user) => {
      nuevoUser = user[0];
      return nuevoUser.encryptPassword(password);
    })
    .then((nuevoPass) => {
      nuevoUser.password = nuevoPass;
      return nuevoUser.save();
    })
    .then((user) => res.json(user))
    .catch((error) => res.json(error));
});

//Modificar informacion de un usuario
app.put('/:id', (req, res) => {
  const { id } = req.params;
  const cambios = req.body;

  Users.findByIdAndUpdate(id, cambios, (err, userUpdate) => {
    console.log(cambios);
    if (err)
      res
        .status(500)
        .send({ message: `Error al actualizar datos del usuario: ${err}` });

    res.status(200).send({ users: userUpdate });
  });
});

// Ruta para enviar notificacion por mail
app.post('/email', (req, res) => {
  const params = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_ACCOUNT,
      pass: EMAIL_PASSWORD,
    },
  });

  transporter
    .sendMail({
      from: '"Veski" <veski@gmail.com>',
      to: params.email,
      subject: params.subject,
      subject: 'lalala',
      text: 'lalala',
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
app.put('/forgot', async (req, res) => {
  try {
    const { userEmail } = req.body;

    const userfind = await User.findOneAndUpdate(
      { email: userEmail },
      { resetCode: generateCode(6) },
      { new: true }
    );
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
      message: 'Error: ' + error,
    });
  }
});

//
app.put('/resetPass', async (req, res) => {
  try {
    const { resetCode, userEmail, newPass } = req.body;

    const user = await User.findOne({ email: userEmail });
    if (user && user.resetCode === resetCode) {
      user.password = newPass;
      await user.save();
      res.status(200).json({
        message: 'Password Update correctly',
        user: user,
      });
    } else {
      res.status(400).json({
        message: 'User not found or reset code do not match',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Error: ' + error,
    });
  }
});

module.exports = app;
