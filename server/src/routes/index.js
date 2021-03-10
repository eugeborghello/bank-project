const { Router } = require('express');
// importamos las rutas
const user = require('./user.js');
//const auth = require("./auth.js");
const router = Router();

router.use("/user", user); 
//router.use("/auth", auth);


module.exports = router;