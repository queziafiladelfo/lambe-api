const express = require('express');
const read = express.Router();
const UserController = require('../controllers/UserController');
const JobController = require('../controllers/JobController');
const ProductController = require('../controllers/ProductController');
const ClientController = require('../controllers/ClientController');

read.get('/',(request,response) => {
    return response.json({mensagem:'Projeto Lambe'});
});

read.get('/users',UserController.read);
read.get('/user',UserController.read);
read.get('/products',ProductController.read);
read.get('/clients',ClientController.read);
read.get('/jobs',JobController.read);

module.exports = read;