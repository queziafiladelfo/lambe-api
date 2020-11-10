const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    nick: { type: String, required: true},
    email: { type: String, required: true},
    phone: { type: String, required: true},
    id: { type: Number, required: true},
    avatar: { type: String, required: true},
});

mongoose.model('User',UserSchema);