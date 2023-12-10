var dns = require("dns");
dns.lookup("www.javatpoint.com",(err,address,url) => {
    console.log("Address--->",address);
    console.log("URL ----->",url);
    console.log(__filename);
})