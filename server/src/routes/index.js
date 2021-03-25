const { Router } = require('express');
// importamos las rutas
const user = require('./user.js');
const auth = require("./routeAuth.js");
const account = require('./account.js')
const payments = require('./payments');
const router = Router();

router.use("/users", user); 
router.use("/users", auth);
router.use('/accounts', account); 
router.use('/payments', payments); 
//router.use("/auth", auth)

module.exports = router;