const link = require("./connection_database");

// const fun = async () => {
//     const db = await connection_data();
    // const result = db.insertOne( // Insert One
//         {brand:"Moto", name:"Moto G30", color:"Stellar Black", price:23000}
//     )
//     console.log(db);
// }

const fun = async () => {
    const db = await link();
    const result = await db.insertMany([ // Insert many
        {brand:"Lava", name:"S20", color:"Blue", price:5000},
        {brand:"Poco", name:"F2", price:16000}
    ])
    console.log(result.insertedIds);
}
fun();
// use node only not nodemon