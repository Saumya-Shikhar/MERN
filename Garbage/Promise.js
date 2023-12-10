// To overcome Asynchronous programming
const promise = require("Promise");

let a = 10;
let b = 0;

let new_b = new promise ((resolve,reject) => {
    setTimeout(() => {
        resolve(30);
    },2000);
});

new_b.then((data) => {
    console.log(a + data);
});