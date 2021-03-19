const mongoose = require('mongoose');
const Users = mongoose.model('Users');
const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
const { generateCode } = require('../../utils/codeGen');

exports.getUsers = (req, res) => {
  Users.find()
    .then((users) =>
      res.status(200).json({
        status: 'success',
        response: users,
      })
    )
    .catch((error) =>
      res.status(400).json({ status: 'error', message: error.message })
    );
};

exports.getUserId = (req, res) => {
  const { id } = req.params;
  Users.findOne({ _id: id })
    .then((user) => res.status(200).json({ status: 'success', response: user }))
    .catch((error) =>
      res.status(400).json({ status: 'error', message: error.message })
    );
};

exports.postLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await Users.findOne({ email: email });
    if (user) {
      const validPassword = await bcrypt.compareSync(password, user.password);
      if (user && validPassword) {
        res.status(200).json({ status: 'success', response: user });
      } else {
        throw new Error('Password must be correct');
      }
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: 'error', message: error.message });
  }
};

exports.createUser = (req, res) => {
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
    .then((user) => res.status(200).json({ status: 'success', response: user }))
    .catch((error) =>
      res.status(400).json({ status: 'error', message: error.message })
    );
};

exports.updateDataUser = (req, res) => {
  const { id } = req.params;
  const cambios = req.body;

  Users.findByIdAndUpdate(id, cambios, (err, userUpdate) => {
    console.log(cambios);
    if (err)
      res.status(400).json({ message: `Error updating user data: ${err}` });

    res.status(200).json({ status: 'success', response: userUpdate });
  });
};

exports.sendEmail = (req, res) => {
  const { name, email, code, date, subject } = req.body;
  // const { code, email } = req.body;

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
      subject: subject,
      text: "Here's your code to reset your password: " + code,
    })
    .then((mail) => {
      res.status(200).json({
        message: 'Mail send success',
        info: mail,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: 'Mail not send ' + error,
      });
    });
};

exports.emailCode = async (req, res) => {
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
};

exports.passwordReset = async (req, res) => {
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
};
