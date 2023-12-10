const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const database_name = 'Custom';
var collection_name = 'product';
const client = new MongoClient(url);

async function Connection_db(){
    let result = await client.connect();   
    let db = result.db(database_name);
    return db.collection(collection_name);
}
// console.warn(Connection_db()); // will generate a promise

module.exports = Connection_db;
// second half in    MongoDB/index.js