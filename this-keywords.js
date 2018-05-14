/*  var car ={
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function(){
        // perform some calc
        return 5000;
    },
    printDescription: function(){
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription(); 

// alt + shift + a -- Comment all

function first(){
    return this;
}
console.log(first()===global);
*/
/* function seconed(){
    'use strict';
    return this;
}
console.log(seconed()===global);
console.log(seconed()===undefined); 

// This depends on HOW a function called.

// An object can be passed as the first argument call
// or apply and this will be bound to it.

let myObject = {value: 'My Object'};
// this propery is set on the global object
global.value = 'Global object';

function third(name){
    return this.value + name;
}
//console.log(third());

console.log(third.call(myObject , ' raj'));
console.log(third.apply(myObject, [' raj'])); */


function fifth(){
    console.log(this.firstName + '' + this.lastName);
}
let customer1 = {
    firstName: 'raj',
    lastName: 'gadde',
    print: fifth
}
let customer2 = {
    firstName: 'indra',
    lastName: 'g',
    print: fifth
}
customer2.print();
customer1.print();