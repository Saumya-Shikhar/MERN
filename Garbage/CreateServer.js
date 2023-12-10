const http = require("http")
http.createServer((req,res) => {
    res.write("Server Created");
    res.end();
}).listen(4500);