
const express = require('express')
const config = require('./utils/config')
const todoRouter = require('./routes/todo')
const app = express()


app.use(express.static('dist'))
app.use(express.json())


app.use('/', todoRouter)

module.exports = app