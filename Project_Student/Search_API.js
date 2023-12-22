const express = require('express');
require('./connection');
const schema_product = require('./index');

const app = express();
app.use(express.json());

app.get('/search/:key', async(req,res) => {
    let data = await schema_product.find(
        {
            "$or":[
                // {"ContactNumber":{$eq:parseInt(req.params.key)}}, // For Type Number
                {"Name":{$regex:req.params.key}},
                {"Email":{$regex:req.params.key}}
            ]
        }
    );
    console.log(data);
    res.send(data);
});

app.listen(5000);
