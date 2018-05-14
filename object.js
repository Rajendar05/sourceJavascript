let car ={
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function(){
        // perform som calc
        return 5000;
    },
    printDescription: function(){
        console.log(this.make + ' ' + this.model);
    }
}
car.printDescription();
console.log(car.year);
//console.log(car['year']);
/*
var anotherCar={};
anotherCar.whatever = 'bob';
console.log(anotherCar.whatever);
*/
/*
var a= {
    myProperty: {b:'hi'}
};
console.log(a.myProperty.b);
*/
/*
var c={
    myProperty:[
        {d: 'this' },
        {e: 'can' },
        {f: 'get' },
        {g: 'crazy' }
    ]
};
*/

let carLot = [
    {year: 2017, make: 'Toyato', model: '4Runner'},
    {year: 2015, make: 'BMW', model: '528i'},
    {year: 1985, make: 'Bucki', model: 'Skylar'},
];

let contacts ={
    customers:[
        {firstName: 'Bob', lastName:'Tabor', phoneNumber:['(123) 123 1234','(321) 321 4561']},
        {firstName: 'Richard', lastName:'DD', phoneNumber:['(345) 444 6654','(234) 876 2342']},
    ],
    employees: [
        {firstName: 'Raj', lastName:'G', phoneNumber:['(444) 556 14564','(414) 447 8752']},
        {firstName: 'ind', lastName:'G', phoneNumber:['(778/) 752 7865']},
        {firstName: 'rav', lastName:'T', phoneNumber:['(855) 555 7896']},
    ]
};