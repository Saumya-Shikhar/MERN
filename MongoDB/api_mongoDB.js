const express = require("express");
const dbconnect = require('./connection_database');
const mongodb = require('mongodb');
const app = express();
app.use(express.json());

// Get using MongoDB
app.get('/', async (req,res) => {
    let data = await dbconnect();
    let result = await data.find().toArray();
    console.log("Result of get",result);
    res.send(result);
});

// Post Using mongoDB
app.post("/", async (req,res) => {
    const data = await dbconnect();
    const result = await data.insertOne(req.body);
    res.send(req.body);
});

// PUT Using MongoDB
app.put("/:brand", async (req,res) => {
    let data = await dbconnect();
    let result = await data.updateOne(
        {brand: req.params.brand},
        {$set: req.body}
    );
    res.send({result:"updated"});
});

// Delete Using MongoDB
app.delete("/:id", async (req,res) => {
    let data = await dbconnect();
    let result = await data.deleteOne(
        {_id: await new mongodb.ObjectId(req.params.id)}
    );
    console.log("Id",req.params.id);
    res.send(result);
});
app.listen(9000);