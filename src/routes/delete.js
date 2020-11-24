const express = require('express');
const destroy = express.Router();
const UserController = require('../controllers/UserController');
const JobController = require('../controllers/JobController');
const ProductController = require('../controllers/ProductController');
const ClientController = require('../controllers/ClientController');

destroy.delete('/user/:id',UserController.delete);
destroy.delete('/client/:id',ClientController.delete);
destroy.delete('/job/:id',JobController.delete);
destroy.delete('/product/:id',ProductController.delete);


module.exports = destroy;