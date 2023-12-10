const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname,"temp_file");
console.log(dirpath);

// Create multiple file
for(i=0; i<4; i++){
    fs.writeFileSync(dirpath+"/hello"+i+".txt","hiiiiiiii");
}

// Read File
// fs.readdir(dirpath,(err,fil) => {
//     console.warn(fil); // return an array
// });

fs.readdir(dirpath,(err,file) => {
    file.forEach((item) => {
        console.warn(item); // returns in string
    });
});
