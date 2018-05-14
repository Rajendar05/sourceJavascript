/*f
unction sayHello(){
    console.log('-----------');
    console.log('hello!');
    console.log('-----------');
}
// sayHello();

let a= sayHello;
a();
a();


function sayHello(name){
    console.log('-----------');
    console.log('hello ' + name + '!');
    console.log('-----------');
}
sayHello('raj');
sayHello('venkat');
sayHello('ravi');
*/

function calculationTax(amount){
    let result = amount * 0.0825;
    return result;
}
let tax =calculationTax(100);
console.log(tax);

let tax2 =calculationTax(1000);
console.log(tax2);