const mongoose = require('mongoose');
const productSch = new mongoose.Schema({
    brand:String,
    name:String,
    price:Number
});

module.exports = mongoose.model('products',productSch);