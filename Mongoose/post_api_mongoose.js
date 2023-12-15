const express = require('express');
require('./database_connect');
const product_exp = require('./Schema_mongoose');

const app = express();
app.use(express.json());
app.post('/cstm', async (req,res) => {
    let data = new product_exp(req.body);
    let data_save = await data.save();
    console.log(data_save);
    res.send("done");
});

app.listen(3333);