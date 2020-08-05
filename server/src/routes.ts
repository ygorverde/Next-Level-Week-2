import express from 'express';

import ClassesControllers from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsControllers';

const routes = express.Router();
const classesController = new ClassesControllers();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);


export default routes;

// GET: Buscar ou listar,
// POST: Criar nova informação,
// PUT: Atualizar informação existente,     
// DELETE: Deletar informação.

// Corpo: (Request Body): Dados para criação ou atualização de um registro.
// Route Params: Identificar qual recurso quero atualizar ou deletar. ex: app.delete('/users/:id').
// Query Params: Paginação, filtros, ordenação.

// Knex: Escrever SQL utilizando JavaScript.