const express = require('express');
const main = express.Router();
const UserController = require('../controllers/UserController');
const JobController = require('../controllers/JobController');
const ProductController = require('../controllers/ProductController');
const ClientController = require('../controllers/ClientController');

main.get('/',(request,response) => {
    return response.json({mensagem:'Projeto Lambe'});
});

main.get('/users',UserController.index);
main.get('/products',ProductController.index);
main.get('/clients',ClientController.index);
main.get('/jobs',JobController.index);

module.exports = main;