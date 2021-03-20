const { Router } = require('express');
// importamos las rutas
const user = require('./user.js');
const auth = require("./routeAuth.js");
const router = Router();

router.use("/users", user); 
router.use("/users", auth);


module.exports = router;