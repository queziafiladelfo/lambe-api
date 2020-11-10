const express = require('express');
const create = express.Router();
const UserController = require('../controllers/UserController');

create.post('/user',UserController.add);


module.exports = create;