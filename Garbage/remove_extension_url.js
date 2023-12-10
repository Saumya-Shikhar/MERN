const path = require("path");
const express = require("express");
const app = express();

const filepath = path.join(__dirname,'Folder');
// console.log("File Path ----> ",filepath);
app.get('',(req,res) => {
    res.sendFile(`${filepath}/home.html`);
});
app.get('/about',(req,res) => {
    res.sendFile(`${filepath}/about.html`);
});
app.get('*',(req,res) => {
    res.sendFile(`${filepath}/404.html`);
});
app.listen(4000);