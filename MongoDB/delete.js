const db = require('./connection_database');

const main = async () => {
    const merge = await db();
    const result = await merge.deleteOne({
        name:"S20"
    });
    console.log(result);
}

// const main = async () => {
//     const merge = await db();
//     const result = await merge.deleteMany({
//         name:"S20"
//     });
//     console.log(result);
// }
main();