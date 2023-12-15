const mongoose = require('mongoose')

mongoose.connect("mongodb://0.0.0.0:27017/Custom");
const productSch = mongoose.Schema(
    {
        brand:String,
        name:String,
        price:Number,
        color:String
    }
);

const CreateDB = async () => {
    const productmodel = new mongoose.model('products',productSch);
    let data = new productmodel(
        {
            brand:'Nokia',
            name:"Nokia 110",
            price:1700,
            color:"Blue"
        });
    const result = await data.save();
    console.log(result);  
}

const updateDB = async () => {
    const productmodel = new mongoose.model('products',productSch);
    let updata = await productmodel.updateOne (
        {brand:"Nokia"},
        {
            $set:{price:999}
        }
    );
    console.log(updata); 
}

const ReadDB = async() => {
    const product = new mongoose.model('products',productSch);
    const data = await product.find({});
    console.log('Find-->',data);
}

const DeleteDB = async() =>{
    const product = new mongoose.model('product',productSch);
    let data = await product.deleteOne(
        {brand:"Nokia"}
    );
    console.log('data',data);
}
