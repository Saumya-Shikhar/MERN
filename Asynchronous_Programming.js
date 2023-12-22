// Drawbacks of Asynchronous Programming

let x =10;
let y = 0;
setTimeout(() => {
    y = 40;
},2000);
console.log(x + y);


console.log(x);
console.log(y);
