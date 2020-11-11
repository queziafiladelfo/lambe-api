const express = require('express');
const update = express.Router();
const UserController = require('../controllers/UserController');
const JobController = require('../controllers/JobController');
const ProductController = require('../controllers/ProductController');
const ClientController = require('../controllers/ClientController');

update.put('/user',UserController.update);
update.put('/client',ClientController.update);
update.put('/job',JobController.update);
update.put('/product',ProductController.update);


module.exports = update;