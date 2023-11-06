const express = require('express');

const notesRoute = require('./notesRoute')

const app = express();

app.use('/notes', notesRoute);

module.exports = app;