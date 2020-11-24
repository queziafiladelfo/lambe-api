const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
require('dotenv/config');

const db_user = process.env.DATABASE_USER;
const db_pass = process.env.DATABASE_PASS;
const db_name = process.env.DATABASE_NAME;

mongoose.connect(
    `mongodb+srv://${db_user}:${db_pass}@cluster0.cbpuy.mongodb.net/${db_name}?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology: true
    }
);

const app = express();

app.use(express.json());
app.use(cors());

requireDir('./models');
app.use('/',require('./routes/create'));
app.use('/',require('./routes/read'));
app.use('/',require('./routes/update'));
app.use('/',require('./routes/delete'));


app.listen(8080, () => {
    console.log(`Projeto lambe-api`);
    console.log(`API rodando na porta http://localhost:8080/`);
    console.log('Pressione Ctrl+C para sair.');
});