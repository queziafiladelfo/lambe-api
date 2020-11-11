const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    //Create
    async add(req,res){
        const user = await User.create(req.body);
        return res.json(user);
    },
    //Read
    async index(req,res) {
        const users = await User.find();
        return res.json(users);
    },
    
    //Update
    async update(req,res) {
        const users = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(users);
    },

    //Delete
    async destroy(req,res){
        await User.findByIdAndRemove(req.params.id);
        return res.send();
    }
}

/*
User.create({
    name:"",
    lastname:"",
    cpf: "",
    birthday: "",
    facebook:"",
    instagram: "",
    email: "",
    phone:"",
    avatar:""
});
*/