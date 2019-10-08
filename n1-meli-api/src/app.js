// importa o módulo
const express = require('express');
// chamada do express
const app = express();

const index = require('./routes/index');
const alunas = require('./routes/alunas');

app.use('/', index);
app.use('/alunas/', alunas);

module.exports = app;