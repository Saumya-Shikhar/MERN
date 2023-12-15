const mongoose = require('mongoose')

    mongoose.connect("mongodb://0.0.0.0:27017/Custom");
    const productSch = mongoose.Schema(
        {
            brand:String,
            name:String,
            price:Number
        }
    );

    const create_main = async () => {
        const productmodel = new mongoose.model('products',productSch);
        let data = new productmodel(
            {
                brand:"BlackBerry", 
                name:"BB 12", 
                price:12000
            });
        const result = await data.save();
        console.log(result);  
    }

    create_main();