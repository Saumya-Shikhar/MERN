// First Half in mongoDB/connection_database.js
const connection_data = require('./connection_database');

const main = async () => {
    let data = await connection_data();
    data = await data.find({}).toArray();
    console.warn("--> ",data);
}

main();