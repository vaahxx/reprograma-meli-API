// importa o módulo
const express = require('express');
// chamada do express
const app = express();

const index = require('./routes/index');
const alunas = require('./routes/alunasRoute');
const professoras = require('./routes/professorasRoute');

// app.all('*', function(req, res, next) {
//     console.log('app . all');
//     next();
// })

app.use('/', index);
app.use('/alunas/', alunas);
app.use('/professoras/', professoras);

module.exports = app;