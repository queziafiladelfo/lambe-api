const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async index(req,res) {
        const users = await User.find();
        return res.json(users);
    },
    async add(req,res){
        const user = await User.create(req.body);
        return res.json(user);
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