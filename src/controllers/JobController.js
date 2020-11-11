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
    },

     //Update
     async update(req,res) {
        const jobs = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(jobs);
    },

    //Delete
    async destroy(req,res){
        await Job.findByIdAndRemove(req.params.id);
        return res.send();
    }
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