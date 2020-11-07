const express = require('express');
const main = express.Router();

main.get('/',(request,response) => {
    return response.json({mensagem:'Projeto Lambe'});
});

module.exports = main;