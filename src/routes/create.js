const express = require('express');
const create = express.Router();
const UserController = require('../controllers/UserController');
const JobController = require('../controllers/JobController');
const ProductController = require('../controllers/ProductController');
const ClientController = require('../controllers/ClientController');

create.post('/user',UserController.create);
create.post('/client',ClientController.create);
create.post('/job',JobController.create);
create.post('/product',ProductController.create);


module.exports = create;