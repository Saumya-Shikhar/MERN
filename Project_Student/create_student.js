const express = require('express');
require('./connection');
const import_product = require('./Schema_file');
const app = express();
app.use(express.json());

app.post('/signup', async (req,res)=> {
    let data = new import_product(req.body);
    let data_save = await data.save();
    console.log(data_save);
    res.send("Registration Successfull "+JSON.stringify(req.body));
});
 
app.post('/signin', async(req,res) => {
    let email_db = await import_product.find({Email:req.body.Email});
    let name_db = await import_product.find({Name:req.body.Name});
    // let class_db = await import_product.find({Class:req.body.Class});

    if(email_db.length > 0 && name_db.length > 0){
        res.send("Welcome "+ req.body.Name);
    }
    else{
        res.send("Invalid Credentials");
    }
});

app.get('/read', async (req,res) => {
    const data = await import_product.find();
    res.send(data);
});

app.put('/update/:Name', async(req,res) => {
    const data = await import_product.updateOne(
        req.params, // using Using Handle
        {
            $set:req.body
        }
    );
    console.log(req.body);
    console.log("Updation Successfull ",data);
    res.send(data);
});

app.delete('/delete/:Name', async(req,res) => {
    const data = await import_product.deleteOne(
        req.params
    );
    console.log(req.params,"has been deleted");
    res.send(data);
});
 
app.get('/search/:key', async(req,res) => {
    const data = await import_product.find({
        "$or":[
            {"Name":{$regex:req.params.key}},
            {"Class":{$regex:req.params.key}}
        ]
    });
    // console.log(req.params.key);
    res.send(data+"---"+req.params.key);
});

app.listen(2000);