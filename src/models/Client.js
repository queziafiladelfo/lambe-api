const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    nickname:{ type: String, required: true},
    lastname: { type: String, required: true},
    cpf: { type: String, required: true},
    birthday: { type: Date, required: true},
    avatar: { type: String, required: true},
    facebook:{ type: String, required: true},
    instagram: { type: String, required: true},
    email: { type: String, required: true},
    phone: { type: String, required: true},
});

mongoose.model('Client',ClientSchema);