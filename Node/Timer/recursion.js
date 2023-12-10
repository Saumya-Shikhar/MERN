// Recursion to use setInterval functionality in setTimeout
var i = 0
var recure = function(){
    i++
    console.log(i);
    setTimeout(recure,1000);
}
recure();