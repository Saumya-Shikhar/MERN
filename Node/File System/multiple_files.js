const fs = require('fs');
const path = require("path");
var dirpath = path.join(__dirname);
console.log(dirpath, "---");

// for(i=1;i<4;i++){
//     fs.writeFileSync("Hello"+i+".txt","This is a text file.");
// }

fs.readdir(dirpath,(err,files) => {
    // console.log("Files Name ",files);
    files.forEach((item) => {
        console.warn("Name --> ",item);
    });
});