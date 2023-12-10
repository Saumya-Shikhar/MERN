const connect = require("./connection_database");

const main = async () => {
    const data = await connect();
    const result = await data.updateOne(
        {name:"Xiaomi 12 Pro"},{ 
            $set: {name:"Xiaomi 12 Pro", price: 35000}
        }    
    );
    console.log(result);
}

// const main = async () => {
//     const data = await connect();
//     const result = await data.updateOne(
//         {name:"Xiaomi 12 Pro"},{ 
//             $set: {name:"Xiaomi 12 Pro", price: 35000}
//         }    
//     );
//     console.log(result);
// }
main();