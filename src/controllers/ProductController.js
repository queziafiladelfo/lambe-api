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
    },

    //Update
    async update(req,res) {
        const products = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(products);
    },
    //Delete
    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
}

/*
User.create({
    name:"",
    value: "",
    description: "",
    about: ""
});
*/