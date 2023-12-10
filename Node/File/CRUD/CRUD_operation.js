const fs = require("fs");
const path = require("path");

const dirpath = path.join(__dirname);
const filePath = `${dirpath}/apple.txt`;
console.log(filePath);

// // file created
// fs.writeFileSync(filePath,"This a file for apple");

// // Read File
// fs.readFile(filePath,'utf8',(err,read) => {
//     console.log(read);
// });

// // Update/Append
// fs.appendFile(filePath," and this is an appended text",(err) => {
//     if(!err) console.log("The file is updated");
// });

// Rename
fs.rename(filePath,`${dirpath}/iplanet.txt`,(err) => {
    if(!err) console.log("The name of file is updated");
});

// Delete
// fs.unlinkSync(`${dirpath}`);
