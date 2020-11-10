const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    //Create
    async add(req,res){
        const products = await Product.create(req.body);
        return res.json(products);
    },
    //Read
    async index(req,res) {
        const products = await Product.find();
        return res.json(products);
    }
    //Update
    //Delete
}

/*
User.create({
    name:"",
    value: "",
    description: "",
    about: ""
});
*/