const express = require('express');
const destroy = express.Router();
const UserController = require('../controllers/UserController');
const JobController = require('../controllers/JobController');
const ProductController = require('../controllers/ProductController');
const ClientController = require('../controllers/ClientController');

destroy.delete('/user',UserController.destroy);
destroy.delete('/client',ClientController.destroy);
destroy.delete('/job',JobController.destroy);
destroy.delete('/product',ProductController.destroy);


module.exports = destroy;