const express = require('express')
const app = express()
const morgan=require('morgan')
const cors = require('cors')
require('./src/database')

app.use('/api/', require('./src/routes/ruta'))

app.listen(3001,() =>  console.log('escuchando en el puerto 3001'))