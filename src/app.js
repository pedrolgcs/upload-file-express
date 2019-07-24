const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')

/* create aplication */
const app = express()

/* database connect */
mongoose.connect(process.env.MONGO_URL,
  { useNewUrlParser: true }
)

/* configs */
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

/* middlewares */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

/* routes */
require('./routes/index')(app)

module.exports = app
