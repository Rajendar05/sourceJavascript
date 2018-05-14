let a='first';
function scopeTest(){
    
    console.log(a);
    let b ='second';
    a='changed';
    if(a != ''){
        console.log(a);
        console.log('inside if: ' + b);
    }
  //  let b= 'second';
}
scopeTest();
//console.log(b);
console.log(a);