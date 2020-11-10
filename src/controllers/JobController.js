const mongoose = require('mongoose');
const Job = mongoose.model('Job');

module.exports = {
    //Create
    async add(req,res){
        const jobs = await Job.create(req.body);
        return res.json(jobs);
    },
    //Read
    async index(req,res) {
        const jobs = await Job.find();
        return res.json(jobs);
    }
    //Update
    //Delete
}

/*
User.create({
    client:"",
    product:"",
    scheduling: "",
    title: "",
    subtitle: "",
    description: ""
});
*/