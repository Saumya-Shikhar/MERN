
const mongoose = require('mongoose');
const db_url = "mongodb://0.0.0.0:27017/Custom";

const main = async() => {
    await mongoose.connect(db_url);
    const productSch = mongoose.Schema({  // Schema adds validations 
            brand:String,
            name:String,
            price:Number
        });

    const productmodel = mongoose.model('products',productSch);  // Where as model adds mongoose to node.js
    let data = new productmodel({ 
        brand:"BlackBerry", 
        name:"BB 12", 
        price:12000});
    let result = await data.save();
    console.log(result);
}
main();