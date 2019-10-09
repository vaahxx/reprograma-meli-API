// const express = require('express');
// const app = express();

// // parametros do .use(): rota e função callback
// app.use('/', function (request, response) {
//     console.log('url:', request.url)
//     response.status(200).send('sucesso')
// }).listen(3000);

const app = require('./src/app');
const port = 3001;
app.listen(port, function (){
    console.log(`O app está rodando na porta ${port}`);
})