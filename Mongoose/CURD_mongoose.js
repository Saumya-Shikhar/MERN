const mongoose = require('mongoose');
const db_url = 'mongodb://0.0.0.0:27017/Custom';

const Saved_file = async () => {
    await mongoose.connect(db_url);
    const result_Schema = await mongoose.Schema({
        brand: String,
        name: Number,
        price: Number
    });
} 

const update_file = async () => {
    const product = mongoose.model('product',result_Schema);
    let data = await mongoose.updateOne(
        {brand:"samsung"},
        {
            $set:{color:"Pearl blue"}
        }
    )
    console.log(data);
}
update_file();