const fs = require('fs');
const path = require('path');
const express = require('express')
const router = require('./routes/random')
const app = express()



app.use(express.static('dist'))
app.use(express.json())

app.use('/', router)

module.exports = app