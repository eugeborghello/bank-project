const { Router } = require("express");
const route = Router();
const controlador = require("../controllers/pruebaControllers");

route.get("/", controlador.obtener);

module.exports = route;
