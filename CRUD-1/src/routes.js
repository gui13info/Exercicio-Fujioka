const express = require('express');
const routes = express.Router();

const FilmeController = require('./controller/FilmeController');

routes.get('/filme', FilmeController.listar);
routes.get('/filme/:id', FilmeController.buscar);
routes.post('/filme', FilmeController.criar);
routes.put('/filme/:id', FilmeController.atualizar);
routes.delete('/filme/:id', FilmeController.deletar);

module.exports = routes;