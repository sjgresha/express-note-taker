//not sure if i need this if all routes are in one file
const express = require('express');

const notesRoute = require('./notesRoute')

const app = express();

app.use('/notes', notesRoute);

module.exports = app;