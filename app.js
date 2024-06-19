const express = require('express')
const colors = require('./models/color')

const app = express()

app.get('/', (req, res) => {
  res.send("Welcome to my Express app")
})

app.get('/colors', (req, res) => {
  res.send(colors)
})

module.exports = app