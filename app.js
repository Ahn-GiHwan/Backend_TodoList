// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', require('./routes/read'))


const port = 3000
app.listen(port, () => {
  console.log(`Express server start localhost:${port}`)
})