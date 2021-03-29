const { Router } = require('express');
// importamos las rutas
const user = require('./user.js');
const auth = require("./routeAuth.js");
const account = require('./account.js');
const contacts = require('./contacts');
const router = Router();

router.use("/users", user); 
router.use("/users", auth);
router.use('/accounts', account);
router.use('/contacts', contacts);
//router.use("/auth", auth)

module.exports = router;