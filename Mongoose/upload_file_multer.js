const express = require('express');
const multer = require('multer');
const app = express();
var file_extension = ".png";

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,callback){
            callback(null,"Mongoose");
        },
        filename:function(req,file,callback){
            callback(null,file.filename+`${file_extension}`);
        }
    })
}).single("pick_file");

app.post('/upload', upload, (req,res) => {
    res.send("file Uploaded");
});

app.listen(9999);