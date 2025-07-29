
const express = require('express')
const config = require('./utils/config')
const app = express()


app.use(express.static('dist'))
app.use(express.json())

module.exports = app