const { Router } = require('express');
// importamos las rutas
const user = require('./user.js');
const account = require('./account.js')
//const auth = require("./auth.js");
const router = Router();

router.use("/users", user);
router.use('/accounts', account) 
//router.use("/auth", auth)

module.exports = router;