const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    client:{ type: String, required: true},
    product:{ type: String, required: true},
    scheduling: { type: String, required: true},
    title: { type: String, required: true},
    subtitle: { type: String, required: true},
    description: { type: String, required: true},
});

mongoose.model('Job',JobSchema);