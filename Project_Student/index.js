const mongoose = require('mongoose');
const productSch = new mongoose.Schema({
    Name:String,
    Class:Number,
    ContactNumber:Number,
    Gender:String,
    Email:String
});

module.exports = mongoose.model('details',productSch);
