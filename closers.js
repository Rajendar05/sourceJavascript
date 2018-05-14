function sayHello(name){
    return function(){
        console.log('howdy ' + name );
    }
}
let bob = sayHello('bob');
let Raj = sayHello('Raj');
let bablu = sayHello('bablu');

bob();
Raj();
bablu();