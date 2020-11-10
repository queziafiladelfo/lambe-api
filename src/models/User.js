const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    lastname: { type: String, required: true},
    cpf: { type: String, required: true},
    birthday: { type: String, required: true},
    avatar: { type: String, required: true},
    facebook:{ type: String, required: false},
    instagram: { type: String, required: false},
    email: { type: String, required: false},
    phone: { type: String, required: false},
});

mongoose.model('User',UserSchema);