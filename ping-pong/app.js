
const express = require('express')
const router = require('./routes/pingpong')
const app = express()



app.use(express.static('dist'))
app.use(express.json())

app.use('/pingpong', router)

module.exports = app