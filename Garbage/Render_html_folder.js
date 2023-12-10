const path = require("path");
const express = require("express");
const init = express();

const filepath = path.join(__dirname,'Folder');
// console.log(filepath);
init.use(express.static(filepath));
init.listen(1080);