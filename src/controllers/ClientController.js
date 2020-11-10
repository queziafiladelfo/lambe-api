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
    }
    //Update
    //Delete
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