const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

/* create aplication */
const app = express()

/* database connect */
mongoose.connect('mongodb://localhost:27017/uplod_file',
  { useNewUrlParser: true }
)

/* middlewares */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

/* routes */
require('./routes/index')(app)

module.exports = app

// stoped in 24:00
