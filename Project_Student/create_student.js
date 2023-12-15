const express = require('express');
require('./connection');
const import_product = require('./index');

const app = express();
app.use(express.json());

app.post('/register', async (req,res)=> {
    const data = new import_product(req.body);
    const data_save = await data.save();
    console.log(data_save);
    res.send("Successfully registered--> "+data_save);
});

app.get('/read', async (req,res) => {
    const data = await import_product.find();
    res.send(data);
});

app.put('/update_url/:_id', async(req,res) => {
    const data = await import_product.updateOne(
        req.params, // using Using Handle
        {
            $set:req.body
        }
    );
    console.log("Updation Successfull using URL ",data.acknowledged);
    res.send(data);
});

// app.put('/update', async (req,res) => {
//     const data = await import_product.updateOne(
//         req.body.Name,
//         {
//             $set:req.body
//         }
//     );
//     console.log("Update Sucessfull using Body");
//     res.send(data);
// });

app.delete('/delete/:_id', async(req,res) => {
    const data = await import_product.deleteOne(
        req.params
    );
    console.log(req.params,"has been deleted");
    res.send(data);
});
 
app.listen(1010);