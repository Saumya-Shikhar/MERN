const fs = require("http")
const input = process.argv;
var fl = fs.writeFileSync(input[2],input[3]);
console.log("File name",fl);