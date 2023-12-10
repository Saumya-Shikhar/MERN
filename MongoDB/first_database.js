// import mongoose from 'mongoose'
// const url = 'mongodb://0.0.0.0:27017/'

// // mongoose.connect(url).then(con => console.log('con')).catch(err => console.log('err',err))
// const fun_call = mongoose.connect(url, (err,value) => {
//     if(err) throw err;
//     var database = value.db("Custom");
//     var new_data = {name:"Saumya", age:22, address:"Ghaziabad"};
//     database.collection("product"),insertOne(new_data,(err,result) => {
//         if(err) throw err;
//         console.log("Successfull",result);
//         value.close();    
//     });
// });

// module.exports = fun_call;