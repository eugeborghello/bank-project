const express = require('express');
const app = express();
const morgan=require('morgan');
const cors = require('cors');
const routes = require('./src/routes/index.js');

// Base de datos
require('./src/database')


// Middelwares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Rutas
app.use('/', routes);

app.listen(3001 || 3002,() =>  console.log('escuchando en el puerto 3001'))
