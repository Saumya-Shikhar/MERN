const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname,"CRUD");
// console.log(dirname);

// Create File
const filePath = `${dirpath}\createFile.txt`;
fs.writeFileSync(filePath,"This is a CURD file");

// Read File
console.log("created file under curd");
fs.readFile(filePath,(err,item) => {
    console.log(item);
});

// Update File 