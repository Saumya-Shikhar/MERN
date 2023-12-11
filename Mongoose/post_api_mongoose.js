const mongoose = require('mongoose');
const productSch = new mongoose.Schema(
    {
        brand:String,
        name:String,
        price:Number
    }
);

const productmodel = mongoose.model('products',productSch)

