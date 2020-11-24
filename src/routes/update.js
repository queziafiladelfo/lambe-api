const express = require('express');
const update = express.Router();
const UserController = require('../controllers/UserController');
const JobController = require('../controllers/JobController');
const ProductController = require('../controllers/ProductController');
const ClientController = require('../controllers/ClientController');

update.put('/user/:id',UserController.update);
update.put('/client/:id',ClientController.update);
update.put('/job/:id',JobController.update);
update.put('/product/:id',ProductController.update);


module.exports = update;