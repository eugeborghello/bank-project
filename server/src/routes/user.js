const app = require("express").Router();
// Model user
const Users = require("../models/user");
const UsersCtrl = require("../controllers/users");
const authUser = require("../middleware/authUserToken");

// Traer todos los users
app.get("/", [authUser], UsersCtrl.getUsers);

// Traer un usuario en particular
app.get("/:id", UsersCtrl.getUserId);

//Modificar informacion de un usuario
app.put("/:id", [authUser], UsersCtrl.updateDataUser);

// Ruta para enviar notificacion por mail
app.post("/email", UsersCtrl.sendEmail);

app.patch("/forgot", UsersCtrl.emailCode);

app.patch("/resetpass", UsersCtrl.passwordReset);

module.exports = app;
