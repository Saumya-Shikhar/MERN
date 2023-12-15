const express = require('express');
require('./connection');
const schema_product = require('./index');

const app = express();
app.use(express.json());

app.get('/search/:key', async(req,res) => {
    let data = await schema_product.find(
        {
            "$or":[
                {'name':{$regex:req.params.key}}
            ]
        }
    );
    console.log(req.params.key);
    res.send(data);
});

app.listen(5000);
