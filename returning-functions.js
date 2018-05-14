// Dont Do This
// var myVariable = 'I an at the global scope';

// This either
/*
var myFunction = function(){
    console.log('mee too!');
}
*/
function one(){
    return 'one';
}
// let value = one();
// console.log(value);
// console.log(one());

let value = one;
// console.log(typeof value);
// console.log(typeof one);
// console.log(value());

// string, function, boolean, undefined, nuber
/*
function two(){
    return function(){
        console.log('two');
    }
}
let myFunction = two();
myFunction();

*/

function three(){
    return function(){
        return 'three';
    }
}
console.log(three()());