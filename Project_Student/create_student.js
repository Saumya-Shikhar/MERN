const express = require('express');
require('./connection');
const import_product = require('./Schema_file');
const app = express();
app.use(express.json());

app.post('/signin', async (req,res)=> {
    let data = new import_product(req.body);
    let data_save = await data.save();
    console.log(data_save);
    res.send("Registration Successfull "+JSON.stringify(req.body));
});
 
app.get('/signin', async(req,res) => {
    let email_db = await import_product.find({Email:req.body.Email});
    let class_db = await import_product.find({Class:req.body.Class});
    // console.log(email_db+" ---- "+class_db,"-------Value Initial"); 
    if(email_db && class_db){
        console.log(email_db+" ---- "+class_db);
        res.send("Welcome "+`${req.body.Name}`);
    }
    else{
        console.log(email_db+" ---- "+class_db);
        res.send("Access Denied");
    }
    // res.send(email_pm);
});

// app.post('/register', async (req,res)=> {
//     const data = new import_product(req.body);
//     const data_save = await data.save();
//     console.log(data_save);
//     res.send("Successfully registered--> "+data_save);
// });

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
 
app.listen(2000);