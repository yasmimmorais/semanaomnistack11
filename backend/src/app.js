const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // converter o corpo da requisição em json
app.use(routes); //deve estar abaixo do express
app.use(errors());

module.exports = app;