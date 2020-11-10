const express = require('express');
const main = express.Router();
const UserController = require('../controllers/UserController');

main.get('/',(request,response) => {
    return response.json({mensagem:'Projeto Lambe'});
});

main.get('/users',UserController.index);

module.exports = main;