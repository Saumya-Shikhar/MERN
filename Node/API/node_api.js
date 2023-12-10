const http = require("http");
const val = require('./data');
http.createServer((req,res) => {
    res.writeHead(201,{"Content-Type":"application\json"});
    res.write(JSON.stringify(val));
    res.end();
}).listen(3100);