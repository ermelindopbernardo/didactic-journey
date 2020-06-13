const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

//GET, POST, PUT,  DELETE
//REQ.QUERY = ACESSAR QUERY PARAMS(PARA FILTROS)
// REQ.BODY = aCESSAR CORPO DA REQUISICAO (PARA CRIACAO, EDICAO )

const app = express(express.json());

mongoose.connect('mongodb+srv://ermelindo:toor@omnistack-3qm3o.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(routes);

app.listen(3333);