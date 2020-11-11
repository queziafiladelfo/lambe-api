const mongoose = require('mongoose');
const Client = mongoose.model('Client');

module.exports = {
    //Create
    async add(req,res){
        const clients = await Client.create(req.body);
        return res.json(clients);
    },
    //Read
    async index(req,res) {
        const clients = await Client.find();
        return res.json(clients);
    },
    //Update
    async update(req,res) {
        const clients = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(clients);
    },

    //Delete
    async destroy(req,res){
        await Client.findByIdAndRemove(req.params.id);
        return res.send();
    }
}

/*
User.create({
    name:"",
    nickname:"",
    lastname: "",
    cpf: "",
    birthday: "",
    avatar: "",
    facebook:"",
    instagram: "",
    email: "",
    phone: ""
});
*/