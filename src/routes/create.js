const express = require('express');
const create = express.Router();
const UserController = require('../controllers/UserController');
const JobController = require('../controllers/JobController');
const ProductController = require('../controllers/ProductController');
const ClientController = require('../controllers/ClientController');

create.post('/user',UserController.add);
create.post('/client',ClientController.add);
create.post('/job',JobController.add);
create.post('/product',ProductController.add);


module.exports = create;