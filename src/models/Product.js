const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    value: { type: Number, required: true},
    description: { type: String, required: true},
    about: { type: String, required: true},
});

mongoose.model('Product',ProductSchema);