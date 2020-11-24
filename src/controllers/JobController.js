const mongoose = require('mongoose');
const Job = mongoose.model('Job');

module.exports = {
    //Create
    async create(req,res){
        const jobs = await Job.create(req.body);
        return res.json(jobs);
    },

    //Read
    async read(req,res) {
        const jobs = await Job.find();
        return res.json(jobs);
    },
     //Update
     async update(req,res) {
        const jobs = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(jobs);
    },

    //Delete
    async delete(req,res){
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