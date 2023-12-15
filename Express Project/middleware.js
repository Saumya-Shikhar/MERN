// import express from "express";
const express = require('express');
const app = express();
const port = 1000;

const middleware = (req,res,next) => {
    if(req.query.name){
        res.send(`Welcome ${req.query.name}`);         
    }
    else{
        next();
    }
}
// app.use(middleware);

app.get("",(req,res) => {
    res.send("This is home page");
});
app.get('/help',middleware,(req,res) => {
   console.log("Welcome to Help Page"); 
   res.send('this is a help page');
});
app.get('/about/:name',(req,res) => {
    console.log("About page running");
    res.send("this is about Page"+req.params.name);
});
app.listen(port, () => {
    console.log("site running at port "+`http://localhost:${port}`);
});